import { existsSync, readdirSync } from 'fs'
import { resolve } from 'path'

const projectsDir = resolve(__dirname, '../projects')

const projects = readdirSync(projectsDir)

describe.each(projects)('@grxy/%s', (project) => {
    const manifestFile = resolve(projectsDir, project, 'package.json')

    it('contains a package.json', () => {
        expect(existsSync(manifestFile)).toBe(true)
    })

    const manifest = require(manifestFile)

    it('is namespaced under the @grxy scope', () => {
        expect(manifest.name).toMatch(/^@grxy\//)
    })

    it('is marked private', () => {
        expect(manifest.private).toBe(true)
    })

    describe('defines required scripts', () => {
        it.each(['build', 'dev', 'start'])('%s', (script) => {
            expect(manifest.scripts[script]).toBeDefined()
        })
    })
})

import config from './'

describe('eslint config', () => {
    it('uses the babel parser', () => {
        expect(config.parser).toBe('@typescript-eslint/parser')
    })
})

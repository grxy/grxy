import { configure } from '@storybook/react'

import loadDecorators from './decorators'

function loadStories() {
    loadDecorators()

    const importAll = (r) => {
        r.keys().forEach(r)
    }

    importAll(require.context('../packages', true, /.stories.js$/))
    importAll(require.context('../projects', true, /.stories.js$/))
}

configure(loadStories, module)

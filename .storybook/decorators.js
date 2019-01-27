import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import React from 'react'

import withThemeProvider from '@grxy/next/containers/withThemeProvider'

const ThemeProvider = withThemeProvider(({ children }) => children)

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>

export default () => {
    addDecorator(ThemeDecorator, module)
    addDecorator(withKnobs, module)
}

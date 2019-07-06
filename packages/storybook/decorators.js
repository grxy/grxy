import { select, withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import React from 'react'

import { getThemeKey } from '@grxy/next/lib/theme'

import withThemeProvider from '@grxy/next/containers/withThemeProvider'

let currentTheme

export default () => {
    const ThemeProvider = withThemeProvider(({ children }) => children)

    const ThemeDecorator = (storyFn) => (
        <ThemeProvider
            onThemeChange={(theme) => {
                currentTheme = theme
            }}
            themeKey={select(
                'Theme',
                {
                    Orange: 'orange',
                    Dark: 'dark',
                    Light: 'light',
                    Purple: 'purple',
                },
                currentTheme || getThemeKey(),
                'GLOBAL',
            )}
        >
            {storyFn()}
        </ThemeProvider>
    )

    addDecorator(withKnobs, module)
    addDecorator(ThemeDecorator, module)
}

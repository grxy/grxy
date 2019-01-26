import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import React from 'react'

import { Global, css } from '@emotion/core'

console.log(Global)

import withThemeProvider from '@grxy/next/containers/withThemeProvider'

const ThemeProvider = withThemeProvider(({ children }) => children)

const ThemeDecorator = (storyFn) => (
    <ThemeProvider>
        <Global
            styles={(theme) =>
                console.log(theme) ||
                css`
                    * {
                        border: none;
                        margin: 0;
                        padding: 0;
                    }

                    html {
                        height: 100%;
                    }

                    body {
                        background: ${theme.colors.background};
                        color: #fff;
                        font-family: Lato, Helvetica, sans-serif;
                    }
                `
            }
        />
        <h1>THIS IS A TEST</h1>
        {storyFn()}
    </ThemeProvider>
)

export default () => {
    addDecorator(ThemeDecorator, module)
    addDecorator(withKnobs, module)
}

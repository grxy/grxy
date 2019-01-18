import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { node } from 'prop-types'
import React from 'react'

import { getTheme } from '@grxy/theme'

const theme = getTheme()

const ThemeProvider = ({ children }) => (
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
)

ThemeProvider.propTypes = {
    children: node.isRequired,
}

export default ThemeProvider

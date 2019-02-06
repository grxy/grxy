import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { useState } from 'react'

import { getTheme } from '../lib/theme'
import useHourlyEffect from '../hooks/useHourlyEffect'

const withThemeProvider = (App) => {
    const ThemeProvider = (props) => {
        /**
         * This block of code sets the client-side theme to be equal to the
         * server-side theme on the initial client side render.It does so by
         * adding the client timezone offset to the server timezone offset
         * to set the Date object equal to the time in the server's
         * timezone. Once rendered, the theme re-renders and transitions the
         * theme to the local time-based theme.
         */
        const date = new Date(props.serverTime)
        const minutes = date.getMinutes()
        const timezoneOffset =
            props.serverTimezoneOffset + date.getTimezoneOffset()

        date.setMinutes(minutes + timezoneOffset)

        const [theme, setTheme] = useState(getTheme(date, props.themeKey))

        const refreshTheme = () => {
            const theme = getTheme(new Date(), props.themeKey)

            setTheme(theme)

            props.onThemeChange && props.onThemeChange(props.themeKey)
        }

        useHourlyEffect(() => {
            refreshTheme()
        }, [props.themeKey])

        const { serverTime, serverTimezoneOffset, ...appProps } = props

        return (
            <EmotionThemeProvider theme={theme}>
                <App {...appProps} />
            </EmotionThemeProvider>
        )
    }

    ThemeProvider.displayName = 'withThemeProvider(App)'

    ThemeProvider.getInitialProps = async (ctx) => {
        let appProps = {}

        // get wrapped component initial props
        if (App.getInitialProps) {
            appProps = await App.getInitialProps(ctx)
        }

        let serverTime, serverTimezoneOffset

        /**
         * Get time and timezone from server and pass to client.
         * This is necessary to achieve a smooth client hydration from the
         * server if the server is in a different timezone than the client.
         */
        if (!process.browser) {
            const date = new Date()
            serverTime = date.valueOf()
            serverTimezoneOffset = date.getTimezoneOffset()
        }

        return {
            appProps,
            serverTime,
            serverTimezoneOffset,
        }
    }

    return ThemeProvider
}

export default withThemeProvider

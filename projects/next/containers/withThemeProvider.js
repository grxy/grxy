import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { Component } from 'react'

import { getTheme } from '../lib/theme'

const withThemeProvider = (App) => {
    class ThemeProvider extends Component {
        static displayName = 'withThemeProvider(App)'

        static async getInitialProps(ctx) {
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

        constructor(props) {
            super(props)

            /**
             * This block of code sets the client-side theme to be equal to the
             * server-side theme on the initial client side render.It does so by
             * adding the client timezone offset to the server timezone offset
             * to set the Date object equal to the time in the server's
             * timezone. Once rendered, the theme re-renders and transitions the
             * theme to the local time-based theme.
             */
            const date = new Date(this.props.serverTime)
            const minutes = date.getMinutes()
            const timezoneOffset =
                this.props.serverTimezoneOffset + date.getTimezoneOffset()

            date.setMinutes(minutes + timezoneOffset)

            this.state = getTheme(date, this.props.themeKey)
        }

        componentDidMount() {
            /**
             * The intent of the following code is to refresh the theme at the
             * top of every hour. I'm sure there are simpler ways to do this
             * using moment or date-fns, but I don't want to add a date lib
             * just yet.
             *
             * TODO: convert to hook: useScheduledCallback or useHourlyCallback
             */
            const nextHour = new Date()
            nextHour.setHours(nextHour.getHours() + 1)
            nextHour.setMinutes(0)
            nextHour.setSeconds(0)
            nextHour.setMilliseconds(0)

            const timeout = nextHour - Date.now()

            this.refreshTheme()

            this.timeout = setTimeout(() => {
                this.interval = setInterval(() => {
                    this.refreshTheme()
                }, 36e5) // every 1 hour (3600s * 1000)

                this.refreshTheme()
            }, timeout)

            window.refreshTheme = this.refreshTheme.bind(this)
        }

        componentDidUpdate(prevProps) {
            /**
             * ThemeProvider becomes a controlled component when the themeKey
             * prop is passed in, preventing the theme from being set based on
             * local time of day.
             */
            if (this.props.themeKey !== prevProps.themeKey) {
                this.refreshTheme()
                this.props.onThemeChange &&
                    this.props.onThemeChange(this.props.themeKey)
            }
        }

        componentWillUnmount() {
            clearTimeout(this.timeout)
            clearInterval(this.interval)
        }

        refreshTheme() {
            const theme = getTheme(new Date(), this.props.themeKey)

            this.setState(() => theme)
        }

        render() {
            const { serverTime, serverTimezoneOffset, ...props } = this.props

            return (
                <EmotionThemeProvider theme={{ ...this.state }}>
                    <App {...props} />
                </EmotionThemeProvider>
            )
        }
    }

    return ThemeProvider
}

export default withThemeProvider

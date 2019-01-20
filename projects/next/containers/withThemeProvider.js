import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { Component } from 'react'

import { getTheme } from '../lib/theme'

const withThemeProvider = (App) => {
    class ThemeProvider extends Component {
        static displayName = 'withThemeProvider(App)'

        static async getInitialProps(ctx) {
            let appProps = {}

            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            let serverTime, serverTimezoneOffset

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

            const date = new Date(this.props.serverTime)
            const minutes = date.getMinutes()
            const timezoneOffset =
                this.props.serverTimezoneOffset + date.getTimezoneOffset()

            date.setMinutes(minutes + timezoneOffset)

            this.state = getTheme(date)
        }

        componentDidMount() {
            /*
                The intent of the following code is to refresh the theme at the top
                of every hour. I'm sure there are simpler ways to do this using
                moment or date-fns, but I don't want to add a date lib just yet.

                TODO: convert to hook: useScheduledCallback or useHourlyCallback
            */
            const now = new Date()

            const next = new Date(now)
            next.setHours(now.getHours() + 1)
            next.setMinutes(0)
            next.setSeconds(0)
            next.setMilliseconds(0)

            const timeout = next - now

            this.refreshTheme()

            this.timeout = setTimeout(() => {
                this.interval = setInterval(() => {
                    this.refreshTheme()
                }, 36e5) // every 1 hour

                this.refreshTheme()
            }, timeout)

            window.refreshTheme = this.refreshTheme.bind(this)
        }

        componentWillUnmount() {
            clearTimeout(this.timeout)
            clearInterval(this.interval)
        }

        refreshTheme() {
            const theme = getTheme(new Date())

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

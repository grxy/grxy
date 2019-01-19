import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { node } from 'prop-types'
import React, { Component } from 'react'

import { getTheme } from '../lib/theme'
class ThemeProvider extends Component {
    state = {
        theme: getTheme(),
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

        this.timeout = setTimeout(() => {
            this.interval = setInterval(() => {
                this.setState(() => ({
                    theme: getTheme(),
                }))
            }, 6e4) // every 1 hour

            this.setState(() => ({
                theme: getTheme(),
            }))
        }, timeout)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        clearInterval(this.interval)
    }

    render() {
        return (
            <EmotionThemeProvider theme={this.state.theme}>
                {this.props.children}
            </EmotionThemeProvider>
        )
    }
}

ThemeProvider.propTypes = {
    children: node.isRequired,
}

export default ThemeProvider

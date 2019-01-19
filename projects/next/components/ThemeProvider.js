import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { node, string } from 'prop-types'
import React, { Component } from 'react'

import { getTheme } from '../lib/theme'
class ThemeProvider extends Component {
    static defaultProps = {
        serverTime: undefined,
    }

    static propTypes = {
        children: node.isRequired,
        serverTime: string,
    }

    state = getTheme(new Date(this.props.serverTime))

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
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
        clearInterval(this.interval)
    }

    refreshTheme() {
        this.setState(() => getTheme())
    }

    render() {
        return (
            <EmotionThemeProvider theme={this.state}>
                {this.props.children}
            </EmotionThemeProvider>
        )
    }
}

export default ThemeProvider

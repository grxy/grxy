import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

import ThemeProvider from '../components/ThemeProvider'

import { Global, css } from '@emotion/core'

import withApolloClient from '../lib/with-apollo-client'

class MyApp extends App {
    render() {
        const { apolloClient, Component, pageProps } = this.props

        return (
            <Container>
                <ThemeProvider serverTime={this.props.serverTime}>
                    <ApolloProvider client={apolloClient}>
                        <Head>
                            <link
                                href="/static/parrot.gif"
                                rel="icon"
                                type="image/gif"
                            />
                        </Head>
                        <Global
                            styles={(theme) =>
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
                        <Component {...pageProps} />
                    </ApolloProvider>
                </ThemeProvider>
            </Container>
        )
    }
}

const withServerTime = (App) => {
    class ServerTime extends React.Component {
        static async getInitialProps(ctx) {
            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            let serverTime

            if (!process.browser) {
                serverTime = new Date(2019, 1, 1, 0).toISOString()
            }

            return {
                ...appProps,
                serverTime,
            }
        }

        render() {
            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }

    return ServerTime
}

export default withServerTime(withApolloClient(MyApp))

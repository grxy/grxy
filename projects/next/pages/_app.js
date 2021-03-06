import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

import withThemeProvider from '../containers/withThemeProvider'

import { Global, css } from '@emotion/core'

import withApolloClient from '../lib/with-apollo-client'

class MyApp extends App {
    render() {
        const { apolloClient, Component, pageProps } = this.props

        return (
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
        )
    }
}

export default withApolloClient(withThemeProvider(MyApp))

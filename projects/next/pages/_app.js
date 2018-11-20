import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'

import withApolloClient from '../lib/with-apollo-client'

class MyApp extends App {
    render() {
        const { apolloClient, Component, pageProps } = this.props

        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Head>
                        <link
                            href="/static/parrot.gif"
                            rel="icon"
                            type="image/gif"
                        />
                    </Head>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        )
    }
}

export default withApolloClient(MyApp)

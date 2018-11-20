import React from 'react'
import Component, { Container } from 'next/app'
import Head from 'next/head'

export default class App extends Component {
    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <link
                        href="/static/parrot.gif"
                        rel="icon"
                        type="image/gif"
                    />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

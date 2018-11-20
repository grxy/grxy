import React from 'react'
import Component, { Head, Main, NextScript } from 'next/document'

export default class Document extends Component {
    render() {
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

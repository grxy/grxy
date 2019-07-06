/* eslint react/prop-types: warn */

import React from 'react'
import initApollo from './init-apollo'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'

export default (App) =>
    class Apollo extends React.Component {
        static displayName = 'withApollo(App)'
        static async getInitialProps(ctx) {
            const {
                Component,
                router,
                ctx: { req, res },
            } = ctx

            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apollo = initApollo(
                {},
                {
                    getUri: () => {
                        if (req) {
                            return `http://${req.headers.host}/_graphql`
                        }

                        return '/_graphql'
                    },
                },
            )

            if (res && res.finished) {
                // When redirecting, the response is finished.
                // No point in continuing to render
                return {}
            }

            if (!process.browser) {
                try {
                    // Run all GraphQL queries
                    await getDataFromTree(
                        <App
                            {...appProps}
                            apolloClient={apollo}
                            Component={Component}
                            router={router}
                        />,
                    )
                } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error(
                        'Error while running `getDataFromTree`',
                        error,
                    )
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()
            }

            // Extract query data from the Apollo store
            const apolloState = apollo.cache.extract()

            return {
                ...appProps,
                apolloState,
            }
        }

        constructor(props) {
            super(props)
            this.apolloClient = initApollo(props.apolloState, {
                getUri: () => '/_graphql',
            })
        }

        render() {
            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }

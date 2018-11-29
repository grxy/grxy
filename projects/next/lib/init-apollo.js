import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import gql from 'graphql-tag'
import fetch from 'isomorphic-fetch'

let apolloClient

function create(initialState) {
    const config = {
        cache: new InMemoryCache().restore(initialState || {}),
        connectToDevTools: process.browser,
        initializers: {
            Query: () => ({}),
        },
        link: new HttpLink({
            fetch,
            uri: 'http://localhost:4000', // Server URL (must be absolute)
        }),
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    }

    if (process.browser) {
        config.typeDefs = gql`
            extend type Query {
                random: String
            }
        `

        config.resolvers = {
            Query: {
                random: () => Math.random(),
            },
        }
    }

    return new ApolloClient(config)
}

export default function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}

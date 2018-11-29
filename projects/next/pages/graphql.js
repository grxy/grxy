import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import { Query } from 'react-apollo'

const query = gql`
    {
        grex {
            age
        }
        random @client
    }
`

export default () => (
    <>
        <Query query={query}>
            {({ data, error, loading }) => {
                if (error) {
                    return <h1>Error...</h1>
                }

                if (loading) {
                    return <h1>Loading...</h1>
                }

                return <pre>{JSON.stringify(data, null, 4)}</pre>
            }}
        </Query>
        <Link href="/" prefetch>
            <a href="/">Go Back</a>
        </Link>
    </>
)

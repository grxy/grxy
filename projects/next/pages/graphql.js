import gql from 'graphql-tag'
import React from 'react'
import { Query } from 'react-apollo'

const query = gql`
    {
        grex {
            age
        }
    }
`

export default () => (
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
)

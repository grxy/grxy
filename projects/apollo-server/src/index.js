import 'dotenv/config'
import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type Grex {
        age: Int
    }

    type Query {
        grex: Grex!
    }
`

const resolvers = {
    Grex: {
        age: () => new Date().getFullYear() - 1992,
    },
    Query: {
        grex: () => ({}),
    },
}

const server = new ApolloServer({
    cacheControl: true,
    resolvers,
    tracing: true,
    typeDefs,
})

server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`))

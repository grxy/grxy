import 'dotenv/config'
import { ApolloServer, gql } from 'apollo-server'

// import { buildServiceDefinition } from '@apollographql/apollo-tools'

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

// const module1 = {
//     resolvers: {
//         Query: {
//             module1Field: () => 'module1Field',
//             user: () => ({}),
//         },
//     },
//     typeDefs: gql`
//         type User {
//             id: ID
//         }

//         extend type Query {
//             module1Field: String
//             user: User
//         }

//         extend type User {
//             module1Field: String
//         }
//     `,
// }

// console.log('service def', buildServiceDefinition([module1]))

// const module2 = {
//     resolvers: {
//         Query: {
//             module2Field: () => 'module2Field',
//         },
//         User: {
//             module2Field: () => 'module2Field',
//         },
//     },
//     typeDefs: gql`
//         extend type Query {
//             module2Field: String
//         }

//         extend type User {
//             module2Field: String
//         }
//     `,
// }

const server = new ApolloServer({
    cacheControl: true,
    introspection: true,
    // modules: [module1, module2],
    playground: {
        endpoint: '/_graphql',
    },
    resolvers,
    tracing: true,
    typeDefs,
})

server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 app running at ${url}`))

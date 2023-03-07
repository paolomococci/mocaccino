import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    type Movie {
        title: String
        director: String
        genre: String
    }

    type Query {
        movies: [Movie]
    }
`

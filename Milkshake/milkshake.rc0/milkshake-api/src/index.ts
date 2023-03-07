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

const movies = [
    {
        title: 'morning taste',
        director: 'John Doe',
        genre: "dramatic",
    },
    {
        title: 'the dummy boot',
        director: 'Jane Doe',
        genre: "sentimental",
    },
    {
        title: 'the definitive fall of the eastern empire',
        director: 'Aulo Agerio',
        genre: "documentary",
    },
]

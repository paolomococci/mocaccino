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
    {
        title: 'the dissatisfied',
        director: 'Numerio Negidio',
        genre: 'comedy',
    },
]

const resolvers = {
    Query: {
        movies: () => movies,
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(
    server, 
    {
        listen: { port: 5000 }
    }
)

console.log(`server listening at: ${url}`)

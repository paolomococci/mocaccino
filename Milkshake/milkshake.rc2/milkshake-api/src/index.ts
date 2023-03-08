import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { $server } from '../config'
import models from './models'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'

const alter = true
const force = false

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({
    schema,
})

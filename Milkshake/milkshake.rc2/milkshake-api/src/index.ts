import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeExecutableSchema } from '@graphql-tools/schema'
import models from './models'
import { $server } from '../config'

const alter = true
const force = false

import { env, checkEnv } from '@nitra/check-env'
import { GraphQLClient, gql } from 'graphql-request'

checkEnv(['QL', 'X_HASURA_ADMIN_SECRET'])

export { gql, GraphQLClient }

export const graphQLClient = new GraphQLClient(env.QL, {
  fetch,
  headers: {
    'X-Hasura-Admin-Secret': env.X_HASURA_ADMIN_SECRET
  }
})

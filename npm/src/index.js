import { checkEnv, env } from '@nitra/check-env'
import { GraphQLClient } from 'graphql-request'

checkEnv(['QL', 'X_HASURA_ADMIN_SECRET'])

export const graphQLClient = new GraphQLClient(env.QL, {
  fetch,
  headers: {
    'X-Hasura-Admin-Secret': env.X_HASURA_ADMIN_SECRET
  }
})
export { GraphQLError } from 'graphql'
export { gql, GraphQLClient } from 'graphql-request'

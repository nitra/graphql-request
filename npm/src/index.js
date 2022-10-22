import checkEnv from '@nitra/check-env'
import { GraphQLClient, gql } from 'graphql-request'

checkEnv(['QL', 'X_HASURA_ADMIN_SECRET'])

export { gql }

export const graphQLClient = new GraphQLClient(process.env.QL, {
  headers: {
    'X-Hasura-Admin-Secret': process.env.X_HASURA_ADMIN_SECRET
  }
})

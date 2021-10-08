import {join} from 'path'
import {makeExecutableSchema} from '@graphql-tools/schema'
import {loadFilesSync} from '@graphql-tools/load-files'
import {mergeTypeDefs} from '@graphql-tools/merge'
import graphQLLetConfig from '../.graphql-let.yml'
import userResolvers from './user/resolvers'
import dataItemResolvers from './dataItem/resolvers'

const loadedFiles = loadFilesSync(join(process.cwd(), graphQLLetConfig.schema))
const typeDefs = mergeTypeDefs(loadedFiles)
const resolvers = {
  ...userResolvers,
  ...dataItemResolvers
};
export const schema = makeExecutableSchema({
  typeDefs, resolvers
})

// @ts-ignore
import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import dateItemResolver from './dataItem/resolvers';
import userResolver from './user/resolvers';
import { ResolverContext } from './apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  dataItems: async (_parent, _args, _context, _info) => await dateItemResolver.queries.dateItems(_parent, _args, _context, _info),
  viewer: (_parent, _args, _context, _info) => userResolver.queries.viewer(_parent, _args, _context, _info)
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName: async (_parent, _args, _context, _info)  => userResolver.mutations.updateName(_parent, _args, _context, _info),
  updateDataItem: async (_parent, _args, _context, _info)  => dateItemResolver.mutations.updateDataItem(_parent, _args, _context, _info)
}

export default { Query, Mutation }

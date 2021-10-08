// @ts-ignore
import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from '../apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  async dateItems(_parent, _args, _context, _info) {
    let queryResults = null;
    if (_args.name == '' && !_args.id) {
      queryResults = await _context.prisma.DataItems.findMany({
        orderBy: {
          index: 'asc',
        },
      });
    }

    return queryResults
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  async updateDataItem(_parent, _args, _context, _info) {
    // userProfile.name = _args.name
    // return userProfile
  },
}

export default { Query, Mutation }

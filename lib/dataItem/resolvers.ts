
const dateItems = async (_parent, _args, _context, _info) => {
  let queryResults = [];
  if (Object.keys(_args).length <= 0) {
    queryResults = await _context.prisma.dataItems.findMany({});
  }

  return queryResults;
}
const updateDataItem = async (_parent, _args, _context, _info)  => {
  // userProfile.name = _args.name
  // return userProfile
  return null;
}
export default {
  queries: {
    dateItems
  },
  mutations: {
    updateDataItem
  }
}

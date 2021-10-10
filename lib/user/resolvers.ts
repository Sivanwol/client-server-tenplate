// @ts-ignore
import {QueryResolvers, MutationResolvers} from 'lib/type-defs.graphqls'

// import { createUser, findUser, validatePassword } from '../lib/user'
// import { setLoginSession, getLoginSession } from '../lib/auth'
// import { removeTokenCookie } from '../lib/auth-cookies'
// import {ResolverContext} from '../apollo'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}
const viewer = (_parent, _args, _context, _info) => {
  return userProfile
}
const updateName = (_parent, _args, _context, _info) => {
  userProfile.name = _args.name
  return userProfile
}

// async signIn(_parent, args, context, _info) {
//   const user = await findUser({ email: args.input.email })
//
//   if (user && (await validatePassword(user, args.input.password))) {
//     const session = {
//       id: user.id,
//       email: user.email,
//     }
//
//     await setLoginSession(context.res, session)
//
//     return { user }
//   }
//
//   throw new UserInputError('Invalid email and password combination')
// },
// async signOut(_parent, _args, context, _info) {
//   removeTokenCookie(context.res)
//   return true
// },

export default {
  queries: {
    viewer
  },
  mutations: {
    updateName
  }
}

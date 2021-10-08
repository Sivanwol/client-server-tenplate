import {PrismaClient} from '@prisma/client'
import { setLoginSession, getLoginSession } from '../auth'
import { removeTokenCookie } from '../auth-cookies'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}
export const createContext = async  (req: any) => {

  // get user's session
  const userSession = await getLoginSession({req});
  console.log("USER SESSION", userSession); // <-- userSession is ALWAYS null
  return {
    ...req,
    prisma,
    isAuth: !userSession
  }
}

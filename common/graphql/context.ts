import {PrismaClient} from '@prisma/client'
import {getSession} from "next-auth/client";
import {AuthenticationError} from "apollo-server-micro";

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}
export const createContext = async  (req: any) => {

  // get user's session
  const userSession = await getSession({req});
  console.log("USER SESSION", userSession); // <-- userSession is ALWAYS null
  return {
    ...req,
    prisma,
    isAuth: !userSession
  }
}

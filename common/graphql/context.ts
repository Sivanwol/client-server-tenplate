
import { setLoginSession, getLoginSession } from '../auth'
import { removeTokenCookie } from '../auth-cookies'
import prisma from '../prisma';
import {PrismaClient} from "@prisma/client";

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}
export const createContext = async  (req: any) => {

  // get user's session
  const userSession = await getLoginSession({req});
  return {
    ...req,
    prisma,
    isAuth: !userSession
  }
}

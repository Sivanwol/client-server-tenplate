import {ApolloServer, AuthenticationError} from 'apollo-server-micro';
import {schema} from '../../lib/schema';
import {getSession} from "next-auth/client";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const apolloServer = new ApolloServer({
  schema,
  context: async ({req}) => {
    /*
    ...

    database connection setup

    ...
    */

    // get user's session
    const userSession = await getSession({req});
    console.log("USER SESSION", userSession); // <-- userSession is ALWAYS null


    if (!userSession) {
      throw new AuthenticationError("User is not logged in.");
    }
  },
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({path: '/api/graphql'})

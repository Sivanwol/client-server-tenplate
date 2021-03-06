import {ApolloServer} from 'apollo-server-micro';
import {schema} from '../../lib/schema';
import {createContext} from "../../common/graphql/context";


const apolloServer = new ApolloServer({
  schema,
  context: createContext,
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

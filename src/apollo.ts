import {ApolloServer} from 'apollo-server-express';
import context from './context';
import {GraphQLError} from 'graphql';
import * as stringify from 'json-stringify-safe';
import {
  connectionPlugin,
  fieldAuthorizePlugin,
  makeSchema,
  nullabilityGuardPlugin,
} from 'nexus';
import * as types from './nexus';

const formatError = (error: GraphQLError) => {
  console.error(error.extensions?.exception?.stacktrace);
  return error;
};

const formatResponse = (res: any) => {
  if (res.errors) {
    try {
      JSON.stringify(res.errors);
    } catch (err) {
      res.errors = JSON.parse(stringify(res.errors));
    }
  }
  return res;
};

const schema = makeSchema({
  types,
  plugins: [
    nullabilityGuardPlugin({
      shouldGuard: true,
      fallbackValues: {
        ID: () => 'MISSING_ID',
        Int: () => -1,
        Boolean: () => false,
        String: () => '',
        Long: () => 0,
        Float: () => 0,
      },
    }),
    connectionPlugin(),
    fieldAuthorizePlugin(),
  ],
});

// @ts-ignore
export default new ApolloServer({
  schema,
  context,
  formatError,
  formatResponse,
  tracing: true,
  playground: true,
  introspection: true,
});

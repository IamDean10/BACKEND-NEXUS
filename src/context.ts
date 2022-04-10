// import {auth} from 'lib-api-common';
import {ExpressContext} from 'apollo-server-express';

export default function (context: ExpressContext) {
  const {req} = context;
  // const authHeader = req.header('Authorization');
  // if (authHeader && authHeader.startsWith('Bearer ')) {
  //   const token = authHeader.substring(7);
  //   return auth.validateToken(token);
  // }
  return {};
}

import './global';
import {connect, disconnect} from 'lib-mongoose';
import {readFileSync} from 'fs';
// @ts-ignore
import * as admin from 'firebase-admin';

export function extractGoogleServiceAccount(
  path?: string | null,
  base64JSON?: string | null
) {
  const serviceAccountBuffer = base64JSON
    ? Buffer.from(base64JSON, 'base64')
    : path
    ? readFileSync(path)
    : null;
  return serviceAccountBuffer
    ? JSON.parse(serviceAccountBuffer.toString())
    : null;
}

// const {
//   GOOGLE_APPLICATION_CREDENTIALS: serviceAccountPath,
//   GOOGLE_APPLICATION_CREDENTIALS_JSON: serviceAccountJSONBase64,
//   GOOGLE_APPLICATION_CREDENTIALS_PUBLIC: serviceAccountPublicPath,
//   GOOGLE_APPLICATION_CREDENTIALS_PUBLIC_JSON: serviceAccountPublicJSONBase64,
// } = process.env;

// global.firebase = admin.initializeApp(
//   {
//     credential: admin.credential.cert(
//       extractGoogleServiceAccount(serviceAccountPath, serviceAccountJSONBase64)
//     ),
//   },
//   'cms'
// );

// global.firebasePublic = admin.initializeApp(
//   {
//     credential: admin.credential.cert(
//       extractGoogleServiceAccount(
//         serviceAccountPublicPath,
//         serviceAccountPublicJSONBase64
//       )
//     ),
//   },
//   'public'
// );

connect().then(() => {
  console.log('Connected to MongoDB');
});

function terminate() {
  disconnect().then();
}

process.on('SIGTERM', terminate);
process.on('SIGINT', terminate);

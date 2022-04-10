"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractGoogleServiceAccount = void 0;
require("./global");
const lib_mongoose_1 = require("lib-mongoose");
const fs_1 = require("fs");
function extractGoogleServiceAccount(path, base64JSON) {
    const serviceAccountBuffer = base64JSON
        ? Buffer.from(base64JSON, 'base64')
        : path
            ? (0, fs_1.readFileSync)(path)
            : null;
    return serviceAccountBuffer
        ? JSON.parse(serviceAccountBuffer.toString())
        : null;
}
exports.extractGoogleServiceAccount = extractGoogleServiceAccount;
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
(0, lib_mongoose_1.connect)().then(() => {
    console.log('Connected to MongoDB');
});
function terminate() {
    (0, lib_mongoose_1.disconnect)().then();
}
process.on('SIGTERM', terminate);
process.on('SIGINT', terminate);
//# sourceMappingURL=initializers.js.map
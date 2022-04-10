// @ts-ignore
import admin from 'firebase-admin';
export {};

declare global {
  // eslint-disable-next-line no-var
  var firebase: admin.app.App;
  // eslint-disable-next-line no-var
  var firebasePublic: admin.app.App;

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      firebase: admin.app.App;
      firebasePublic: admin.app.App;
    }
  }
}

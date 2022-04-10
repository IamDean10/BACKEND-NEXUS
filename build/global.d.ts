import admin from 'firebase-admin';
export {};
declare global {
    var firebase: admin.app.App;
    var firebasePublic: admin.app.App;
    namespace NodeJS {
        interface Global {
            firebase: admin.app.App;
            firebasePublic: admin.app.App;
        }
    }
}

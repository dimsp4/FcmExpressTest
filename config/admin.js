var admin = require("firebase-admin");

var serviceAccount = require('../public/fcm-test-order-firebase-adminsdk-o58is-cb90974093.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore()

module.exports = {admin, db}
const admin = require('firebase-admin');
const serviceAccount = require('./serviceaccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pushnotification-72a63-default-rtdb.firebaseio.com'
});

module.exports.messaging = admin.messaging();
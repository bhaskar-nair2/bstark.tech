const functions = require('firebase-functions');
const admin = require('firebase-admin');
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var serviceAccount = require('../credentials/service-account.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://bstark-tech.firebaseio.com'
});

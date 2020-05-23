const functions = require('firebase-functions');
const admin = require('firebase-admin')
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendMail = require("./functions/message")

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bstark-tech.firebaseio.com"
});

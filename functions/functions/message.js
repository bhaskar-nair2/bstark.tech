const functions = require('firebase-functions');

exports.sendMail = functions.firestore
	.document('/messages/{messageId}')
	.onCreate(async (snapshot, context) => {
		const data = snapshot.data();
		console.log(data);
	});

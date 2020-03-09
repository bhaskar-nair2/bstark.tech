import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCuTHCQ9EYShs9HTssF8DAZZRhioa3CVP4',
	authDomain: 'bstark-tech.firebaseapp.com',
	databaseURL: 'https://bstark-tech.firebaseio.com',
	projectId: 'bstark-tech',
	storageBucket: 'bstark-tech.appspot.com',
	messagingSenderId: '452734007753',
	appId: '1:452734007753:web:3e25efd7bbc8f9ff691018',
	measurementId: 'G-F9691YVJDQ'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const gridCollection = db.collection('maingrid');
const msgCollection = db.collection('messages');

export { db, gridCollection, msgCollection };

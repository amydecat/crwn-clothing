import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDEo8YPLhKhe8xhsX8Byy6WDJF-RiByehk",
	authDomain: "crwn-db-e8f0d.firebaseapp.com",
	databaseURL: "https://crwn-db-e8f0d.firebaseio.com",
	projectId: "crwn-db-e8f0d",
	storageBucket: "crwn-db-e8f0d.appspot.com",
	messagingSenderId: "124317639564",
	appId: "1:124317639564:web:60e17bb14a479b46aceca9",
	measurementId: "G-C4ERLGNEXV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



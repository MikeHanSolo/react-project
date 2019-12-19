import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDvsoir3hAKpHh6pZ7lpLPmWYpSM0BJZE4",
  authDomain: "crwn-db-f3b6e.firebaseapp.com",
  databaseURL: "https://crwn-db-f3b6e.firebaseio.com",
  projectId: "crwn-db-f3b6e",
  storageBucket: "crwn-db-f3b6e.appspot.com",
  messagingSenderId: "689927994395",
  appId: "1:689927994395:web:1fad908bd3c4ff0733ccbe"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
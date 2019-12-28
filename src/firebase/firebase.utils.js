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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
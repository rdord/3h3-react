import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD7iN7NgkljzWTKwb9DWFstd63edvRVyzM',
  authDomain: 'h3-db-636c2.firebaseapp.com',
  databaseURL: 'https://h3-db-636c2.firebaseio.com',
  projectId: 'h3-db-636c2',
  storageBucket: 'h3-db-636c2.appspot.com',
  messagingSenderId: '786737384487',
  appId: '1:786737384487:web:035cb217d709736c4b5202',
  measurementId: 'G-MYCBQ1Y42C'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

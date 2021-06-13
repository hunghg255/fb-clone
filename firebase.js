import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  // config here
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

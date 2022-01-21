import firebase from "firebase/compat/app";
import { getFirestore, collection } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import Constants from "../../secret";

const firebaseConfig = {
  apiKey: Constants.apiKey,
  authDomain: Constants.authDomain,
  projectId: Constants.projectId,
  storageBucket: Constants.storageBucket,
  messagingSenderId: Constants.messagingSenderId,
  appId: Constants.appId,
  measurementId: Constants.measurementId,
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const analytics = getAnalytics(app); // export?
// expo-firebase-analytics
const db = getFirestore(app);
// console.log(firebase.auth);

// Retrieve the collection of users
// export const userRef = collection(db, 'users');
export const auth = firebase.auth();
export default db;

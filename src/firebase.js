// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBumYbNj07HZa5669CpDI4KODI2vVPf38U",
  authDomain: "clone-8ddfe.firebaseapp.com",
  projectId: "clone-8ddfe",
  storageBucket: "clone-8ddfe.appspot.com",
  messagingSenderId: "465553909674",
  appId: "1:465553909674:web:bb4afaa2bc07a9d597add3",
  measurementId: "G-M07M4BS6CP",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

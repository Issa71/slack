// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzSegmhLZWZyT3GHBWCgga1GKkjNIie8k",
  authDomain: "slack-8ef94.firebaseapp.com",
  projectId: "slack-8ef94",
  storageBucket: "slack-8ef94.appspot.com",
  messagingSenderId: "741732298835",
  appId: "1:741732298835:web:75f1b3b25c523d9da016a6",
  measurementId: "G-WXESJSXZPN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

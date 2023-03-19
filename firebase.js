import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzb8-K6ig4_PX0JBQmSEdjuQaS7pCV9Eg",
  authDomain: "hermes-17a6a.firebaseapp.com",
  projectId: "hermes-17a6a",
  storageBucket: "hermes-17a6a.appspot.com",
  messagingSenderId: "403203454882",
  appId: "1:403203454882:web:e67b551bac9bf1edf6a4fb",
  measurementId: "G-MW8MSBH5GR",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

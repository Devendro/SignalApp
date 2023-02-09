import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPTTkQSTpg15mHbbBj8ovkcdgbaOLyLiE",
  authDomain: "hermes-2031e.firebaseapp.com",
  projectId: "hermes-2031e",
  storageBucket: "hermes-2031e.appspot.com",
  messagingSenderId: "677358675442",
  appId: "1:677358675442:web:f6d0efa00ff9705963376b",
  measurementId: "G-EC0D7EDXLZ"
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

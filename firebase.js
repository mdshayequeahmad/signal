import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDa_YaWKRP2HqvYAr5Oaoz-1LH23eC_17o",
    authDomain: "signal-2d187.firebaseapp.com",
    projectId: "signal-2d187",
    storageBucket: "signal-2d187.appspot.com",
    messagingSenderId: "161987256970",
    appId: "1:161987256970:web:52f01481144c02a2b8c373"
  };


  let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
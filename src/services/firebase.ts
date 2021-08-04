import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyBI9GwxFmEBsy9-ZVucy0ql7sHcWW67F_Y",
  authDomain: "onlinegallery-ce57a.firebaseapp.com",
  projectId: "onlinegallery-ce57a",
  storageBucket: "onlinegallery-ce57a.appspot.com",
  messagingSenderId: "239899178553",
  appId: "1:239899178553:web:0b115cb847e26916967fe8",
  measurementId: "G-N4QQQQC32Z"
});
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const analytics = firebase.analytics();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  db,
  auth,
  storage,
  analytics,
  githubProvider,
  googleProvider,
};

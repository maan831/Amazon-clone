// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD4IE-EjwzcnqBokVuMlQ-DVlPhhgb3idA",
  authDomain: "challenge-b4034.firebaseapp.com",
  projectId: "challenge-b4034",
  storageBucket: "challenge-b4034.appspot.com",
  messagingSenderId: "179355911304",
  appId: "1:179355911304:web:9fce996f701e228e7e8b3d",
  measurementId: "G-GG05WPW394"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db,auth};
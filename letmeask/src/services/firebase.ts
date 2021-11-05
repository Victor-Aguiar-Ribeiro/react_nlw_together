import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDNbuzUuu3JvCdcTSP6i-WOsKo5yuCxCr8",
  authDomain: "nlw-letmeask-c6ff6.firebaseapp.com",
  databaseURL: "https://nlw-letmeask-c6ff6-default-rtdb.firebaseio.com",
  projectId: "nlw-letmeask-c6ff6",
  storageBucket: "nlw-letmeask-c6ff6.appspot.com",
  messagingSenderId: "946667630136",
  appId: "1:946667630136:web:a26c43f8a138f12f2f40cd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

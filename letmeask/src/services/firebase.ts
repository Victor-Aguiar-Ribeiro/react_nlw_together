import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDNbuzUuu3JvCdcTSP6i-WOsKo5yuCxCr8",
  authDomain: "nlw-letmeask-c6ff6.firebaseapp.com",
  databaseURL: "https://nlw-letmeask-c6ff6-default-rtdb.firebaseio.com",
  projectId: "nlw-letmeask-c6ff6",
  storageBucket: "nlw-letmeask-c6ff6.appspot.com",
  messagingSenderId: "946667630136",
  appId: "1:946667630136:web:a26c43f8a138f12f2f40cd"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCHuLBzBaPdDu6ygJZZzF3h025BrEb19Lo",
//   authDomain: "whatsapp-clone-1dbed.firebaseapp.com",
//   projectId: "whatsapp-clone-1dbed",
//   storageBucket: "whatsapp-clone-1dbed.appspot.com",
//   messagingSenderId: "1043910258272",
//   appId: "1:1043910258272:web:ea6bc0e7fbff4a01f19d05",
//   measurementId: "G-LPSXZNSCY0",
// };




// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCHuLBzBaPdDu6ygJZZzF3h025BrEb19Lo",
//   authDomain: "whatsapp-clone-1dbed.firebaseapp.com",
//   projectId: "whatsapp-clone-1dbed",
//   storageBucket: "whatsapp-clone-1dbed.appspot.com",
//   messagingSenderId: "1043910258272",
//   appId: "1:1043910258272:web:ea6bc0e7fbff4a01f19d05",
//   measurementId: "G-LPSXZNSCY0",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHuLBzBaPdDu6ygJZZzF3h025BrEb19Lo",
  authDomain: "whatsapp-clone-1dbed.firebaseapp.com",
  projectId: "whatsapp-clone-1dbed",
  storageBucket: "whatsapp-clone-1dbed.appspot.com",
  messagingSenderId: "1043910258272",
  appId: "1:1043910258272:web:ea6bc0e7fbff4a01f19d05",
  measurementId: "G-LPSXZNSCY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = firebaseApp.firestore();
auth.languageCode = 'it';
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
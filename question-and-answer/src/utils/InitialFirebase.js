import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaQ4y6_QLzv5A7qF02ka9hdflrVpnUDCk",
  authDomain: "my-first-hosting-97075.firebaseapp.com",
  databaseURL: "https://my-first-hosting-97075-default-rtdb.firebaseio.com",
  projectId: "my-first-hosting-97075",
  storageBucket: "my-first-hosting-97075.appspot.com",
  messagingSenderId: "288687474517",
  appId: "1:288687474517:web:c7ba101cea53e78dce51dc",
  measurementId: "G-78V3FRPWWM",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;

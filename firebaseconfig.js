import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCZZfyQ4UrG5OsLSYVfTWd0pJBIavE5C9E",
  authDomain: "whatsapp-clone-react-e3679.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-react-e3679-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-react-e3679",
  storageBucket: "whatsapp-clone-react-e3679.appspot.com",
  messagingSenderId: "765163545935",
  appId: "1:765163545935:web:e6feb0eeb12e0a2080d13a"
};
// Initialize Firebase
const fire =firebase.initializeApp(firebaseConfig);

 export default firebaseConfig;
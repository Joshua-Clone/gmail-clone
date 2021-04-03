import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDskekWsnySIYeJ22-fUsOJVZsmGokFNSM",
    authDomain: "clone-af61f.firebaseapp.com",
    projectId: "clone-af61f",
    storageBucket: "clone-af61f.appspot.com",
    messagingSenderId: "789133600233",
    appId: "1:789133600233:web:b65076b5b515edcfdb5778",
    measurementId: "G-HYB25BZCEK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { db, auth, provider }; 

  // on firebase.com 
// Go to the console 
// Click on or add the project that you are building 
// Click on the gear icon and select Project Setting 
// Type the name of your project 
// Do not add hosting yet 
// Once done scroll down on Project settings to "Firebase SDK snippet" 
// Click on "Config" 
// Copy that snippet and paste it here 
// Create a firebase.js file like this one 
// In terminal type "npm/yarn add firebase"
// While that is loading go back to firebase.com 
// Click on Firestore and "Create database"
// Select "Start in Test Mode & Next" 
// Do not change anything on next prompt and click "Enable"
// Click on Authentication tab on right and get started
// Enable Google, enter email and save
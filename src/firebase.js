// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBp9jQFk94bp9LESVn8D4xPQUrb1mjzy4o",
    authDomain: "e-clone-9c271.firebaseapp.com",
    databaseURL: "https://e-clone-9c271.firebaseio.com",
    projectId: "e-clone-9c271",
    storageBucket: "e-clone-9c271.appspot.com",
    messagingSenderId: "228053802596",
    appId: "1:228053802596:web:f643d32a5c2219986e0971",
    measurementId: "G-BXE4BQ2J0K"
  };

  const firebaseApp = Firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = Firebase.auth();


  export {db,auth};
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCralzW1MXbbLOqoDUZiKN5YhqarVJofdc",
  
    authDomain: "disneyplus-clone-4689c.firebaseapp.com",
  
    projectId: "disneyplus-clone-4689c",
  
    storageBucket: "disneyplus-clone-4689c.appspot.com",
  
    messagingSenderId: "233556246592",
  
    appId: "1:233556246592:web:c0f1f7beb4495b614d9fa5",
  
    measurementId: "G-FYJYCB12LM"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
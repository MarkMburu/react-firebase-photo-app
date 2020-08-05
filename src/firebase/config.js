import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeoKqw_huG5F3FQBHDirteHiZarvw8yiw",
    authDomain: "mark-firegram.firebaseapp.com",
    databaseURL: "https://mark-firegram.firebaseio.com",
    projectId: "mark-firegram",
    storageBucket: "mark-firegram.appspot.com",
    messagingSenderId: "1046455925266",
    appId: "1:1046455925266:web:aa95588699ce9fec9936cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export default { projectStorage,projectFirestore};

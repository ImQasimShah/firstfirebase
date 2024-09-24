
const firebaseConfig = {
    apiKey: "AIzaSyBJbHBGsVjqaSj9v8Ht8GU_Rl06OquvCNw",
    authDomain: "addpatient-a5fca.firebaseapp.com",
    projectId: "addpatient-a5fca",
    storageBucket: "addpatient-a5fca.appspot.com",
    messagingSenderId: "283511674643",
    appId: "1:283511674643:web:fd843a324dbafcc5cf6ce6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore()

  
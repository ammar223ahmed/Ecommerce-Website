 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { 
    getAuth,  
     onAuthStateChanged,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  import { 
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  import { 
    getStorage,
    ref,
    uploadBytes ,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtCf3iFnvsTGKzgwY8kDifkOp1lUlKUqg",
    authDomain: "events-app-150dc.firebaseapp.com",
    projectId: "events-app-150dc",
    storageBucket: "events-app-150dc.appspot.com",
    messagingSenderId: "1016046281657",
    appId: "1:1016046281657:web:b59cf76040a08feec60c68",
    measurementId: "G-5FZW9TMJ22"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);
  


export{
    auth ,
    db,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    ref,
    uploadBytes ,
    getDownloadURL,
    signOut,
    collection,
    addDoc,
    getDoc,
    getDocs,
  } 
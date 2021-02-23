import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_wKWbTQk_N-v_dlxUU2Lp25NoYzvBXxE",
  authDomain: "ayur-demo.firebaseapp.com",
  projectId: "ayur-demo",
  storageBucket: "ayur-demo.appspot.com",
  messagingSenderId: "509486074995",
  appId: "1:509486074995:web:15add9b756ee7eadf92e06",
  measurementId: "G-YZS26QFL7T"
};

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db=firebase.firestore();
  const storage=firebase.storage();
  export {auth,db,storage}
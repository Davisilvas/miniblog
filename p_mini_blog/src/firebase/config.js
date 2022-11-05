import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDlqxFAESeTPkmx4Ogm33Eo28fK7hFyrjM",
  authDomain: "miniblog-d1dca.firebaseapp.com",
  projectId: "miniblog-d1dca",
  storageBucket: "miniblog-d1dca.appspot.com",
  messagingSenderId: "167728507183",
  appId: "1:167728507183:web:85a6623c17329b0f6499da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
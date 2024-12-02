// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzYBtDlGvDsr_sjys-h5PkwMLhffeaA7o",
  authDomain: "rombex-e9bd2.firebaseapp.com",
  projectId: "rombex-e9bd2",
  storageBucket: "rombex-e9bd2.appspot.com",
  messagingSenderId: "993717756967",
  appId: "1:993717756967:web:d674fd964d26c212f91a02",
  measurementId: "G-C45DK0VZ1W"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const main_db = getFirestore(db);
export const edd  = main_db;
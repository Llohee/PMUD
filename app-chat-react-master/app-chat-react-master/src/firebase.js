
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtLvUgFLlzfROXKGKto3nSE2jVG-hYpRI",
  authDomain: "cmt-app-53c4b.firebaseapp.com",
  projectId: "cmt-app-53c4b",
  storageBucket: "cmt-app-53c4b.appspot.com",
  messagingSenderId: "1062407058654",
  appId: "1:1062407058654:web:1ee1c4446925f2ef94be4f",
  measurementId: "G-B15MX6BNGB",
  databaseURL:"https://cmt-app-53c4b-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue,  };
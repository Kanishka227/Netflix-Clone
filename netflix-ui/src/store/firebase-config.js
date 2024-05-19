// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHukjCvaN_aBO8VLApT--FwpTb1o_eBa0",
  authDomain: "netflix-clone-31ca6.firebaseapp.com",
  projectId: "netflix-clone-31ca6",
  storageBucket: "netflix-clone-31ca6.appspot.com",
  messagingSenderId: "413851505020",
  appId: "1:413851505020:web:d62f5d176e0901af9954f9",
  measurementId: "G-3ZWV32YLKN",
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)


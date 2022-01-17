import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAkuFwWlVCDCg6JBGJCKH2hL6IDXPJnc4",
    authDomain: "recipe-app-8fa1c.firebaseapp.com",
    databaseURL: "https://recipe-app-8fa1c-default-rtdb.firebaseio.com",
    projectId: "recipe-app-8fa1c",
    storageBucket: "recipe-app-8fa1c.appspot.com",
    messagingSenderId: "1099249559373",
    appId: "1:1099249559373:web:548cf31878560eb431b904"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
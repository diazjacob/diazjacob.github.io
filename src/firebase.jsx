// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBltiA7GgEVFCbM50ueEz736UP5di_1fsY",

    authDomain: "website-4931c.firebaseapp.com",

    projectId: "website-4931c",

    storageBucket: "website-4931c.appspot.com",

    messagingSenderId: "594762582151",

    appId: "1:594762582151:web:b1d522ecf83af42e009022"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

let database = getFirestore(app);

export {database}
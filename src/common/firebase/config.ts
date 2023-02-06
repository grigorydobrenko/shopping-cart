import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAz8R7qHnBw4NcJZsFZgmwWbA-V8ClaciU",
    authDomain: "cart-35255.firebaseapp.com",
    projectId: "cart-35255",
    storageBucket: "cart-35255.appspot.com",
    messagingSenderId: "882036637011",
    appId: "1:882036637011:web:03502b2da157a12ab135a6"
}


export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

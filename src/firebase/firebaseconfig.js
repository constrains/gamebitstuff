import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBd1e8-_DULu-j81Bhr6lLwzz6tn2OMIG4",
    authDomain: "altimox-be18e.firebaseapp.com",
    projectId: "altimox-be18e",
    storageBucket: "altimox-be18e.firebasestorage.app",
    messagingSenderId: "899657215933",
    appId: "1:899657215933:web:9c38ed54ef71546feb2cd4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDzm1PlXlFxsJyH0VZyFJu-k3kUovtivec",
    authDomain: "osuchat-6b04c.firebaseapp.com",
    databaseURL: "https://osuchat-6b04c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "osuchat-6b04c",
    storageBucket: "osuchat-6b04c.appspot.com",
    messagingSenderId: "535537901185",
    appId: "1:535537901185:web:219d641424595f3165f780",
    measurementId: "G-SXQM8E1YZK"
});

export default firebaseConfig;
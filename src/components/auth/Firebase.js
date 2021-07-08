import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA11Se4qbQEgnFFPYCCWZbq8m5uh9yfhpM",
    authDomain: "recetti-project.firebaseapp.com",
    projectId: "recetti-project",
    storageBucket: "recetti-project.appspot.com",
    messagingSenderId: "736021754985",
    appId: "1:736021754985:web:3250aedf0ecc4be692def8",
    measurementId: "G-ZGHTYR97FV"
});

export const auth = app.auth();
export const useFireStore = firebase.firestore();
export const useFireStorage = firebase.storage();
export default app;

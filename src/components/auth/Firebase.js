import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import config from './config.js';

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const useFireStore = firebase.firestore();
export const useFireStorage = firebase.storage();
export const db = firebase.firestore();
export default app;
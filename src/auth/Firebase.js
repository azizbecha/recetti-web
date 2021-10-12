import firebase from 'firebase';

// import firebase credentials from config.js file
import config from './config.js';

// Initialize connection to Firebase
const app = firebase.initializeApp(config);

// Auth
export const auth = app.auth();

// Firestore database
export const useFireStore = firebase.firestore();

// Firebase storage
export const useFireStorage = firebase.storage();

export default app;
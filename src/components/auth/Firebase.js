import firebase from 'firebase';
import config from './config.js';

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const useFireStore = firebase.firestore();
export const useFireStorage = firebase.storage();
export default app;

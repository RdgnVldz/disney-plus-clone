import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB6Bb9s8VjuT6QomjdaBrL-oMCI3IooRZc",
    authDomain: "disney-plus-clone-e46f7.firebaseapp.com",
    projectId: "disney-plus-clone-e46f7",
    storageBucket: "disney-plus-clone-e46f7.appspot.com",
    messagingSenderId: "254095470358",
    appId: "1:254095470358:web:f707450a3db5a13d8eaa37",
    measurementId: "G-6X0LY1LM5N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db; 
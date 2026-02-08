// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getDatabase, 
    ref, 
    set, 
    get, 
    push, 
    update, 
    remove,
    onValue,
    query,
    orderByChild,
    equalTo,
    child 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { 
    getStorage, 
    ref as storageRef, 
    uploadBytes, 
    getDownloadURL,
    deleteObject 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyACbkpT74plbA6REQnbF1775ZbwbnhJemk",
    authDomain: "khan-jan-seva-kendra-ac2f2.firebaseapp.com",
    databaseURL: "https://khan-jan-seva-kendra-ac2f2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "khan-jan-seva-kendra-ac2f2",
    storageBucket: "khan-jan-seva-kendra-ac2f2.firebasestorage.app",
    messagingSenderId: "894379656916",
    appId: "1:894379656916:web:a45feb916031b5a3afdd41",
    measurementId: "G-6EKFZXQFCS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { 
    auth, database, storage, 
    ref, set, get, push, update, remove, onValue, query, orderByChild, equalTo, child,
    storageRef, uploadBytes, getDownloadURL, deleteObject,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, 
    signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail
};

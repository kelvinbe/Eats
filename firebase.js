import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot   } from "firebase/firestore";
import { API_KEY, AUTH_DOMAIN, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET, APP_ID } from "@env"
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";


const firebaseConfig = {
  // your firebase configuration
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const store = getStorage(app)
const path = ref(store, 'gs://eats-9dfce.appspot.com')
const functions = getFunctions(app);


// make sure to export everything you'll need in other files
export { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, store, path, getDownloadURL, functions, httpsCallable };







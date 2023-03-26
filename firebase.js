import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_APIKEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECTID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APPID}`,
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firestore = getFirestore();
const storage = getStorage(app);
export { db, firestore, storage };

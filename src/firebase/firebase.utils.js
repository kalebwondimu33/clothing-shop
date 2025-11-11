import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyCy7swUqtg3YOZLzkJc78fMeONRlXjl86E",
  authDomain: "crown-db-525ab.firebaseapp.com",
  projectId: "crown-db-525ab",
  storageBucket: "crown-db-525ab.firebasestorage.app",
  messagingSenderId: "1068795667747",
  appId: "1:1068795667747:web:a5e218873ee14cfcf79896",
  measurementId: "G-V8BJDMHKHX",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => signInWithPopup(auth, provider);

export default app;

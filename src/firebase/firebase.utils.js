import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyDL2-n5OCLeAch8Rc3eVJZkmIRQ25DxQs8",
  authDomain: "crown-db-d7fd3.firebaseapp.com",
  projectId: "crown-db-d7fd3",
  storageBucket: "crown-db-d7fd3.firebasestorage.app",
  messagingSenderId: "967043883866",
  appId: "1:967043883866:web:f7b28665fc1c3265d64963",
  measurementId: "G-63YRNH0QDZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => signInWithPopup(auth, provider);

export default app;

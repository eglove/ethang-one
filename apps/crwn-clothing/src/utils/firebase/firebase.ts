import { Constant, ENV_KEYS } from '@ethang/node-environment';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  UserCredential,
  UserInfo,
} from 'firebase/auth';
import {
  doc,
  DocumentReference,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: new Constant().get(ENV_KEYS.FIREBASE_API_KEY),
  appId: new Constant().get(ENV_KEYS.FIREBASE_APP_ID),
  authDomain: new Constant().get(ENV_KEYS.FIREBASE_AUTH_DOMAIN),
  messagingSenderId: new Constant().get(ENV_KEYS.FIREBASE_MESSAGING_SENDER_ID),
  projectId: new Constant().get(ENV_KEYS.FIREBASE_PROJECT_ID),
  storageBucket: new Constant().get(ENV_KEYS.FIREBASE_STORAGE_BUCKET),
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = async (): Promise<UserCredential> => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect = async (): Promise<never> => {
  return signInWithRedirect(auth, provider);
};

export const database = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: UserInfo
): Promise<DocumentReference> => {
  const userDocumentReference = doc(database, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocumentReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, {
        createdAt,
        displayName,
        email,
      });
    } catch (error: unknown) {
      console.error(error);
    }
  }

  return userDocumentReference;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

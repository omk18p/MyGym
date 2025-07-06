import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3nSmxlDfSTNG1Qv9abpfYZKaO7Qkq8-8",
  authDomain: "gymbuddychat-acee1.firebaseapp.com",
  databaseURL: "https://gymbuddychat-acee1-default-rtdb.firebaseio.com",
  projectId: "gymbuddychat-acee1",
  storageBucket: "gymbuddychat-acee1.appspot.com",
  messagingSenderId: "650900731982",
  appId: "1:650900731982:web:e778dc247a215da33c6b1f",
  measurementId: "G-H1Z02D7GLX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realtimeDb = getDatabase(app);

export { app }; 
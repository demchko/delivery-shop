import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUdEUxIQ-9yB_BZ3uMsEaa0zAmPwmH2ac",
  authDomain: "delivery-shop-892fa.firebaseapp.com",
  projectId: "delivery-shop-892fa",
  storageBucket: "delivery-shop-892fa.appspot.com",
  messagingSenderId: "486391261186",
  appId: "1:486391261186:web:a78ec52aa710cfc7c55f1b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    // LEGG INN DIN EGEN KONFIGURASJON HER
    // INFO: Denne informasjonen finner du i Firebase-prosjektet ditt, under "Project settings" -> "General" -> "Your apps" -> "Firebase SDK snippet" -> "Config"
    // Du kan også bruke miljøvariabler for å holde denne informasjonen hemmelig, og importere dem her. Du legger da inn variablene i en .env-fil, og importerer dem med import.meta.env.VARIABLE_NAME, slik som vist under.
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
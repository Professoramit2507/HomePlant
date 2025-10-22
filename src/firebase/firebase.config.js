// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpcT-cvR59vm2y_kuSFWAzJycbDNRfoBU",
  authDomain: "plantshop-1be27.firebaseapp.com",
  projectId: "plantshop-1be27",
  storageBucket: "plantshop-1be27.firebasestorage.app",
  messagingSenderId: "664407951291",
  appId: "1:664407951291:web:75f8a8c0021cdc043b669e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


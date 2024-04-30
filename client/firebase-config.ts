import { initializeApp, getApps, getApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS4YOKK2Wr8iXCRLdF2-0Y8R0tBb2HBUk",
  authDomain: "jonathan-data-visualization.firebaseapp.com",
  projectId: "jonathan-data-visualization",
  storageBucket: "jonathan-data-visualization.appspot.com",
  messagingSenderId: "643613488016",
  appId: "1:643613488016:web:ea2964519ff0bfe4507915",
  measurementId: "G-HPSKRXVMG3",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

if (location.hostname === "localhost") {
  const db = getFirestore(app);
  connectFirestoreEmulator(db, "localhost", 8080);

  const auth = getAuth(app);
  connectAuthEmulator(auth, "http://localhost:9099");
}

export { app };

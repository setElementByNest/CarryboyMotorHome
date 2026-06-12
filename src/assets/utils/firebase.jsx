import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNIFhM2NHx_jCN7VmGK9vkbyAUuKH57hw",
  authDomain: "carryboyserver-motorhome.firebaseapp.com",
  databaseURL:
    "https://carryboyserver-motorhome-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carryboyserver-motorhome",
  storageBucket: "carryboyserver-motorhome.appspot.com",
  messagingSenderId: "964057917055",
  appId: "1:964057917055:web:fe976f7dacb1e8330b014a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPvvr6NxEHdIhxnZRbWn9hKbWbWi-nJp8",
  authDomain: "jira-cff57.firebaseapp.com",
  databaseURL: "https://jira-cff57-default-rtdb.firebaseio.com",
  projectId: "jira-cff57",
  storageBucket: "jira-cff57.appspot.com",
  messagingSenderId: "364550409406",
  appId: "1:364550409406:web:1bd8ebc1ffa7867f37e2ef",
  measurementId: "G-SHFX4FER0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
    db,
    auth,
    storage 
}
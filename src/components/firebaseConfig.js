import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwDX9-O_ue2pToHawFcM3GHhdSefB4QOg",

  authDomain: "e-processus.firebaseapp.com",

  projectId: "e-processus",

  storageBucket: "e-processus.appspot.com",

  messagingSenderId: "286352177394",

  appId: "1:286352177394:web:12d6b8c81e1ebbf3d6f86b",
};
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

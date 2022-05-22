import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA0Y-0SCVB1O1fMgrZBTBSQdAYxReOxITU",
  authDomain: "react-chat-e1344.firebaseapp.com",
  projectId: "react-chat-e1344",
  storageBucket: "react-chat-e1344.appspot.com",
  messagingSenderId: "1068398864897",
  appId: "1:1068398864897:web:b2b8dd0140e484dd96ae00",
  measurementId: "G-CSZYYP1MN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const firestore = getFirestore(app)

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      auth,
      firestore,
      app
    }}>

    <App />

    </Context.Provider>
  </React.StrictMode>
);


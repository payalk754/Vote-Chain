/*import '../polyfill';*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/*import { initializeApp } from 'firebase/app';*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


 
const firebaseConfig = {
  apiKey: "AIzaSyDR33UQ7dcwJKQ97YB7gciL25WzzZZN3tE",
  authDomain: "vote-chain-584ef.firebaseapp.com",
  projectId: "vote-chain-584ef",
  storageBucket: "vote-chain-584ef.appspot.com",
  messagingSenderId: "1022439102368",
  appId: "1:1022439102368:web:b6f21814a483ba1646b6c5"
};

firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const storage = firebase.storage();
const db = firebase.firestore();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


export {db};
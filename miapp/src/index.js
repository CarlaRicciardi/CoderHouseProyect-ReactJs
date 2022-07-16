import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDBiF9L0_M1SbbhLDUVGtbNzr-YAbAF_HU",
  authDomain: "carrizo-petshop.firebaseapp.com",
  projectId: "carrizo-petshop",
  storageBucket: "carrizo-petshop.appspot.com",
  messagingSenderId: "649748631962",
  appId: "1:649748631962:web:487492cf37a7c1d6326a23",
  measurementId: "G-47WDDWPZDD"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {MainApp} from "./App"
import firebase from 'firebase'
import { initializedUser } from './redux/auth-reducer'
import store from './redux/store-redux'

const  firebaseConfig = {
	apiKey: "AIzaSyBodS8dyFJe8zphDqN-AhzRC5vqqVQPYuc",
	authDomain: "gp-firebase-1f88e.firebaseapp.com",
	databaseURL: "https://gp-firebase-1f88e-default-rtdb.firebaseio.com",
	projectId: "gp-firebase-1f88e",
	storageBucket: "gp-firebase-1f88e.appspot.com",
	messagingSenderId: "380953107415",
	appId: "1:380953107415:web:fb05f1e685cc9c8e148992"
}
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged((user) => user && store.dispatch(initializedUser(user.uid, user.email)))

ReactDOM.render(
      <MainApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

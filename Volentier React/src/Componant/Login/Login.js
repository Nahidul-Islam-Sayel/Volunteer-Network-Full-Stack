import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD_Hfm_ABZqhLLH6rXcjMNwEPxuYAnk058",

  authDomain: "voice-of-people-71603.firebaseapp.com",

  projectId: "voice-of-people-71603",

  storageBucket: "voice-of-people-71603.appspot.com",

  messagingSenderId: "815582020041",

  appId: "1:815582020041:web:93db265463a7b80ae7a818"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const Login = () => {
  const [loggedInUser, setLoggedInUser , Type , setType , Name , setName , Email , setEmail] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  

    const googlesingin =()=>{
      const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const {displayName, email} = result.user;
    setName(displayName);
    setEmail(email);
    const signedInUser = {name: displayName, email} 
    setLoggedInUser(signedInUser);
    history.replace(from);
    // ...
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    } 
 
    return (
      <div className="form-style-9">
      <img src="https://i.imgur.com/jvXfGwT.png" alt="" srcset=""/>
      <h5>Register As a Volunteer</h5>
      
      <button onClick={googlesingin}> <img src="https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_960_720.png" alt="" srcset=""/> Log In With Google</button>
      </div>
    
    );
};
export default Login;
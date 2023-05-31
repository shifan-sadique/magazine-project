import Register from "../../register/Register"
import Settings from "../settings/Settings"
import React, { useContext, useState } from "react";
import "./login.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";



async function getUserData(uid) {
  const userDocRef = doc(db, "user", uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return userDocSnapshot.data();
  } else {
    throw new Error("User data not found");
  }
}

export default function Login(props) {

  const [error,setError]= useState(false)
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });

        getUserData(user.uid)
          .then((userData) => {
            if (userData.isMagazineEditor) {
              navigate("/admin/dashboard");
            } else {
              navigate("/committee/dashboard");
            }
          })
          .catch((error) => {
            console.log(error);
            setError(true);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  
      
  return (
    <div className="login" id="gradient">
      <form onSubmit={handleLogin} className="loginForm">
        <span className="loginTitle">LOGIN</span>
        <label htmlFor="">Email</label>
        <input
          className=""
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton">Login</button>
        <br />
        <Link to="/register">
          <button className="loginRegisterButton">Register</button>
        </Link>
        {error && <span className="invalid">Invalid Credentials</span>}
      </form>
    </div>
  );
}
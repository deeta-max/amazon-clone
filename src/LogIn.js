import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./LogIn.css";


function LogIn(){
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const SingIn  = e => {
        e.preventDefault(); 

        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/")
        })
        .catch(error => alert(error.message))
    }

    const RegisterButton = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }

    return(
        <div className="login">
        <Link to="/">
            <img className="login-image" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" /> 
        </Link>
          <div className="login-container">
              <h1>Sign-in</h1>
              <form>
                  <h5>Email</h5>
                  <input type="email" value={email} onChange=
                  {e => setEmail(e.target.value)} />
                  <h5>Password</h5>
                  <input type="password" value={password}  onChange=
                  {e => setPassword(e.target.value)} />
                  <button type="submit" onClick={SingIn} className="login-signin-button">Sign IN</button>
              </form>
              <p>By signingin you agree to Amazon's Fake clone conditions of Use& Sale. Please see our Privacy notice, our Cookies Notice and our Interest-based Ads Notice.</p>
              <button onClick={RegisterButton} className="login-registration-button">Create your Amazon Account</button>
          </div> 
        </div>
    );
};

export default LogIn;
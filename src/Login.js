import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { provider } from "./firebase";
import { auth } from "./firebase";
import "firebase/auth";
import "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
require("firebase/auth");


function Login() {

  const [ {}, dispatch ] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
      };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://user-images.githubusercontent.com/75200810/136686820-fbaa62d2-c0a6-4245-8876-df9a86814aaf.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to whatsapp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;

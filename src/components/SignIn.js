// rfceでスニペット
import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app"
import {auth} from "../firebase";


function SignIn() {
  function signInWithGoogle(){
    // google認証をするためにインスタンス化
    const provider = new firebase.auth.GoogleAuthProvider();
    // ポップアップしてログインする
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>
        グーグルでログインする
      </Button>
    </div>
  )
}

export default SignIn
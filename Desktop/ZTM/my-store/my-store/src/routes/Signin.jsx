import React from 'react'
import  Signup  from '../components/Sign-up.jsx'
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../firebase/firebase.utils.js'
export const Signin = () => {
  const logGoogleUser = async () =>{

    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(user)
  }
  return (
    
    <>
    <div>Signin</div>
    <button onClick={logGoogleUser}>signIn</button>
    <Signup />
    </>
    
  )
}

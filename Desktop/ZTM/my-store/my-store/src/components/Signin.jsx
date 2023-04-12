import React from 'react'
import { useState } from 'react'
import  {signInWithGooglePopup,createUserDocumentFromAuth, signInwithEmailAndPassword}  from '../firebase/firebase.utils'
import Forminput from './Forminput'
import './signinForm.scss'
import Button from './Button'

const defaultFormFields={
    email:'',
    password:'',
}

const Signin = () => {
    const[formFields,setformFields]=useState(defaultFormFields)
    const{email,password} = formFields
   
    const resetFields=()=>{
        setformFields(defaultFormFields)
    }
    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup()
            await createUserDocumentFromAuth(user)
            console.log(user)
      }
        const handleSubmit=async(event)=>{
            event.preventDefault()
        
        try {
           const response = await signInwithEmailAndPassword(email,password)
           console.log(response)
           resetFields() 
        } catch (error) {
            console.log(alert('User not found with these credentials'),error)
        }    
        }
    const handleChange=(event)=>{
        const{name,value} = event.target
        setformFields({...formFields,[name]:value})
        }    
       
  return (
    <div className='sign-in-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            
            <Forminput label='Email'
             type="email" name ='email' onChange={handleChange} value= {email} required
            />

            <Forminput label='Password'
             type="password" name='password' onChange={handleChange} value= {password} required
            /> 
            <div className='buttons-container'>
            <Button type='submit' onChange={handleChange}>Sign In </Button>
            <Button type='button' buttonType='google' onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
            </div>
            
        </form>
    </div>
  )
}
export default Signin
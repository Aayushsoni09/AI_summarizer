import React from 'react'
import { useState } from 'react'
import  {createuserWithEmailAndPassword,createUserDocumentFromAuth, auth}  from '../firebase/firebase.utils'
import Forminput from './Forminput'
import './signupForm.scss'
import Button from './Button'

const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const Signup = () => {
    const[formFields,setformFields]=useState(defaultFormFields)
    const{displayName,email,password,confirmPassword} = formFields
   
    const resetFields=()=>{
        setformFields(defaultFormFields)
    }

    const handleSubmit=async(event)=>{
        event.preventDefault()
        if (password !== confirmPassword){
            alert("passwords don't match!")
            return}
        try {
            const {user} = await createuserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user,{displayName})
            resetFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('email already in use...')
            }
            else{
                console.log("user creation encountered an error",error)
            }
        }    
        }
    const handleChange=(event)=>{
        const{name,value} = event.target
        setformFields({...formFields,[name]:value})
        }    
       
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <Forminput label='Display Name'
             type="text" name='displayName' onChange={handleChange} value= {displayName} required 
            />
            
            <Forminput label='Email'
             type="email" name ='email' onChange={handleChange} value= {email} required
            />

            <Forminput label='Password'
             type="password" name='password' onChange={handleChange} value= {password} required
            /> 
            <Forminput label='Confirm Password'
            type="password" name='confirmPassword' onChange={handleChange} value= {confirmPassword} required
            />
            <Button type='submit' onChange={handleChange}>Sign Up</Button>
        </form>
    </div>
  )
}
export default Signup
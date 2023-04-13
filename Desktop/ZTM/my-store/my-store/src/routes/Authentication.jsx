import React from 'react'
import  Signup  from '../components/Sign-up.jsx'
import Signin from '../components/Signin.jsx'
import './authentication.scss'


export const Authentication = () => {
  return (
    
    <div className='authentication-container'>
    <Signin/>
    <Signup />
    </div>
    
  )
}

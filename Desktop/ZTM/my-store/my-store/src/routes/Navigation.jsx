import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../assets/crown.svg'
import './navigation.scss'
import { useContext } from 'react'
import { UserContext } from '../components/contexts/Usercontext.jsx'
import { signOutUser } from '../firebase/firebase.utils'

export const Navigation = () => {
  const {currentUser} =useContext(UserContext) 
  
  return (
    <>
       <div className='navigation'>
            <Link className='logo-container' to='/'>
                <div><CrwnLogo/></div>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                { currentUser ?  (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>) : 
                    (<Link className='nav-link' to='/sign-in'>
                    SIGNIN
                    </Link>)
                }
               
            </div>
        </div> 
        <Outlet/>
    </>
  )
}

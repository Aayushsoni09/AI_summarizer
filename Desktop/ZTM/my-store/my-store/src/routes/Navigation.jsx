import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../assets/crown.svg'
import './navigation.scss'
import { useContext } from 'react'
import { UserContext } from '../components/contexts/Usercontext.jsx'
import { signOutUser } from '../firebase/firebase.utils'
import Carticon from '../components/cart-icon/Cart-icon'
import CartDropdown from '../components/cart-dropdown/CartDropdown'
import { CartContext } from '../components/contexts/CartContext'
export const Navigation = () => {
  const {currentUser} = useContext(UserContext) 
  const {isCartOpen} = useContext(CartContext)
  
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
                <Carticon/> 
            </div>
            { isCartOpen && <CartDropdown/>}
        </div> 
        <Outlet/>
    </>
  )
}

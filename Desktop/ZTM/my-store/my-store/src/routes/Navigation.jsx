import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../assets/crown.svg'
import './navigation.scss'
export const Navigation = () => {
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
                <Link className='nav-link' to='/sign-in'>
                    SIGNIN
                </Link>
            </div>
        </div> 
        <Outlet/>
    </>
  )
}

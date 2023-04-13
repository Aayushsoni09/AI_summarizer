import {ReactComponent as Shoppingcart} from '../../assets/shopping-bag.svg'
import React from 'react'
import './cartIcon.scss'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

const Carticon = () => {
  const {isCartOpen,setIsCartOpen} = useContext(CartContext)
  const toggleIsCartOpen =()=>{
    setIsCartOpen(!isCartOpen)}
  return (
    <div className='cart-icon-container'  onClick={toggleIsCartOpen}>
        <Shoppingcart className="shopping-icon"/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default Carticon
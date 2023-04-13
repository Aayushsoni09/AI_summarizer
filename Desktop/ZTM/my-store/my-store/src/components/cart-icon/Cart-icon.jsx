import {ReactComponent as Shoppingcart} from '../../assets/shopping-bag.svg'
import React from 'react'
import './cartIcon.scss'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

  
const Carticon = ({cartItem}) => {
  const {isCartOpen,setIsCartOpen,cartItemCount} = useContext(CartContext)
  const toggleIsCartOpen =()=>{
    setIsCartOpen(!isCartOpen)}
  return (
    <div className='cart-icon-container'  onClick={toggleIsCartOpen}>
        <Shoppingcart className="shopping-icon"/>
        <span className='item-count'>{cartItemCount}</span>
    </div>
  )
}

export default Carticon
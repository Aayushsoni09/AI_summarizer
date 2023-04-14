import React from 'react'
import { useContext} from 'react'
import { useNavigate } from 'react-router'
import { CartContext } from '../contexts/CartContext'
import './cartDropdown.scss'
import Button from '../Button'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate=new useNavigate()
  const goToCheckoutHandler=()=>{
  navigate('checkout')
}

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
  )
}

export default CartDropdown
import { useContext } from 'react'
import { CartContext } from './contexts/CartContext'
import React from 'react'
import './productCard.scss'
import Button from './Button'

const Product = ({product}) => {
    const {name,price,imageUrl} = product
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart=()=>addItemToCart(product)
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default Product
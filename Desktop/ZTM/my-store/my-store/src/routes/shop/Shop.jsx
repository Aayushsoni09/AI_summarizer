import { useContext } from 'react'
import { ProductContext } from '../../components/contexts/ProductsContext'
import React from 'react'
import ProductCard from '../../components/Product-Card'
import './shop.scss'
const Shop = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className='products-container'>
        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        
        ))}
    </div>
  )
}

export default Shop
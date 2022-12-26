import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { products as pList } from '../product'
import { addCart } from '../redux/cart-reducer';
import '../App.css'

const Product = () => {
    const [products, setProducts] = useState(pList)
    console.log(products)
    const dispatch  = useDispatch() 
  return (
    <div style={{display:'flex', flexWrap:'wrap', }}>
        {
            products.length>0 && products.map((product)=>(
                <div className='product-card-main' key={product.id}>
                    <img src={product.img} alt="" />
                    <div className='product-id'>{product.id}</div>
                    <div className='product-name'>{product.name}</div>
                    <div className='product-price'>{product.price}</div>
                    <button onClick={()=>{dispatch(addCart(product))}}>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Product
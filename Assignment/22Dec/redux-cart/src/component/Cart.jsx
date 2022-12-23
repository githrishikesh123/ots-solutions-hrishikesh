import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart ,clearCart,incrementQuantity,decrementQuantity} from '../redux/cart-reducer'

const Cart = () => {
    const {cartItem} = useSelector((state)=>state.cart.data)
    // const {cartItem } =   ((state)=>state.data.cart)
    console.log(cartItem)
    console.log(cartItem.length)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Cart</h1>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {cartItem ? (
                cartItem.map((product, index)=>(
                <div style={{height:'300px', width:'300px', border:'1px solid'}} key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <button onClick={()=>{dispatch(removeFromCart(index))}} >Remove from Cart</button>
                    <p><span><button onClick={()=>{dispatch(decrementQuantity(product))}}>-</button></span>{product.quantity}<span>
                        <button  onClick={()=>{dispatch(incrementQuantity(product))}}>+</button></span></p>
                </div>)
            )):<div>No data Found</div>} 
        </div>
        <div>
               {cartItem.length>0? <button onClick={()=>{dispatch(clearCart())}}>Empty Cart</button>:''}
            </div>
    </div>
  )
}

export default Cart
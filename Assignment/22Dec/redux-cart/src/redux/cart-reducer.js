import { createSlice } from "@reduxjs/toolkit";

// const initialState = {data: {cartItem:[]}} 
const initialState = {data: {cartItem:[]},quantity:0} 
// const initialState = {data: {id:null,item:{cartItem:{}}},count:0}

// cartItem: {
//    1:{item: {id: 1, name:'Smart Tv', price:'200$'}, count:5}
//    2:{item: {id: 2, name:'Smart Tv', price:'200$'}, count:2}
//    3:{item: {id: 3, name:'Smart Tv', price:'200$'}, count:1}
//}

// {id: 1, name:'Smart Tv', price:'200$'}

// action.payload = {id: 1, name:'Smart Tv', price:'200$'}
// action.payload.id = 1
// if 1 is present in cartItem as a key them increase count
// else create a key 1 and assign action.payload as a value to id

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart: (state, action) => {
            const findId = state.data.cartItem.findIndex(item=>item.id===action.payload.id)
            if(findId>=0){
                state.data.cartItem[findId].quantity+=1
            }
            else{
                const tempItem={...action.payload, quantity:1}
            state.data.cartItem.push(tempItem)
            }     
        },
        removeFromCart: (state, action) => {
            const newArray = state.data.cartItem.filter((item, index)=>index!==action.payload)
            state.data = {cartItem: newArray}
        },
        clearCart:(state,action)=>{
            state.data.cartItem=[]
            
        },
        incrementQuantity:(state,action)=>{
            const findId = state.data.cartItem.findIndex(item=>item.id===action.payload.id)
            if(findId>=0){
                state.data.cartItem[findId].quantity++;
            }         
           
        },
        decrementQuantity:(state,action)=>{
            const findId = state.data.cartItem.findIndex(item=>item.id===action.payload.id)
            // if(findId>=0){
            //     state.data.cartItem[findId].quantity-=1;
            // }
            // console.log('findId',findId)
            if(findId>=0 || state.data.quantity>=2){
                state.data.cartItem[findId].quantity-=1;
            }
            console.log('findId',findId)
            
            
        }
       // inrement and decrement reducer
    }
})

export const {addCart, removeFromCart,clearCart,incrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice
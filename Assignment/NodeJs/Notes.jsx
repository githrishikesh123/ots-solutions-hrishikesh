/*
POST = Create NEW record
        create new resource at Database. It means it adds new data.
        [ Create in CRUD ]

PUT = If the record exists, update else, create a new record
        [ Update in CRUD ]

PATCH = update
        [ Update in CRUD ]

GET = read;
        Get the data from server and show it to user

DELETE = delete;

*/


/*
PUT===>
        If we want to change the first name then we send a put request for Update

        { "first": "Michael", "last": "Angelo" }

        Here, although we are only changing the first name, with PUT request we have to send both parameters 
        first and last.

        In other words, it is mandatory to send all values again, the full payload.


PATCH===>
        When we send a PATCH request, however, we only send the data which we want to update.
        In other words, we only send the first name to update, no need to send the last name.
*/


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: { cartItem: {} },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (Object.keys(state.data.cartItem).length === 0) {
        state.data = {
          cartItem: { [action.payload.id]: { ...action.payload } },
        };
      } else if (state.data.cartItem.hasOwnProperty(action.payload.id)) {
        let count1 = state.data.cartItem[action.payload.id].count + 1;
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: {
              ...state.data.cartItem[action.payload.id],
              count: count1,
            },
          },
        };
      } else {
        state.data = {
          cartItem: {
            ...state.data.cartItem,
            [action.payload.id]: { ...action.payload },
          },
        };
      }
    },
    removeFromCart: (state, action) => {
      if (state.data.cartItem[action.payload].id === action.payload) {
        let item = delete state.data.cartItem[action.payload];
        state.data = { cartItem: { ...state.data.cartItem, ...item } };
      }
    },
  },
});

export const { addCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
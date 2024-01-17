import { createSlice } from "@reduxjs/toolkit";
import Products from "../../data";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:Products,
        totalAmount:0,
        totalCount:0,
    },
    reducers:{
        getCartTotal : (state)=>{
            let {totalAmount} = state.items.reduce((cartTotal,cartItem)=>{
               let  {price}  = cartItem
               cartTotal.totalAmount += price;
               return cartTotal
           },{totalAmount:0})
           // to update the value in redux store
          state.totalAmount=totalAmount.toFixed(2)
         }
       },
       
     });
     
     export const {getCartTotal} = cartSlice.actions
     export default cartSlice.reducer;
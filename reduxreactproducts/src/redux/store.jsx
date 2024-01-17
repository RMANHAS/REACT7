import { configureStore, createSlice } from "@reduxjs/toolkit";
import  cartSlice  from "./features/cartSlice.jsx";

export default configureStore({
    reducer:{
        cart:cartSlice
    }
});
// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./features/cartSlice";

// export default configureStore({
//     reducer:{
//         cart:cartSlice
//     }
// })
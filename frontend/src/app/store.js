import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/User/UserSlice';
import productReducer from '../features/Product/ProductSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer
    },
    devTools: false,
});

export default store;
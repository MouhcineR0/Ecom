import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], error: "" };

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers:  (builder) => {
        builder
        .addCase()
    }
});

export default productSlice.reducer;
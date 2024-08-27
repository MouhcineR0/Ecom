import { createSlice } from "@reduxjs/toolkit";
import { GetProducts } from "./ProductFunctions";

const initialState = { products: [], error: false, loading: false, ErrorType: "" };

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        SingleProduct: (state, { id }) => {
            return state.products?.find((ele, _) => ele.id == id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.error = false;
                state.loading = false;
            })
            .addCase(GetProducts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(GetProducts.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    }
});

export default productSlice.reducer;
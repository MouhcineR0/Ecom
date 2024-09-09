import { createSlice } from "@reduxjs/toolkit";
import { DelProduct, EditProduct, GetProducts, SetProduct } from "./ProductFunctions";

const initialState = { products: [], error: false, loading: false, ErrorType: "", SERVER_STATE: "" };

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        SingleProduct: (state, { id }) => {
            return state.products?.find((ele, _) => ele.id == id);
        },
        ResetProductParams: (state, _) => {
            state.ErrorType = "";
            state.SERVER_STATE = "";
            state.loading = false;
            state.products = [];
        }
    },
    extraReducers: (builder) => {
        builder
            // Get Products Cases
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
            })
            // Set Product Cases
            .addCase(SetProduct.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.SERVER_STATE = payload;
            })
            .addCase(SetProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(SetProduct.rejected, (state, { payload }) => {
                state.ErrorType = payload;
            })
            // Edit Product Cases
            .addCase(EditProduct.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.SERVER_STATE = payload;
            })
            .addCase(EditProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(EditProduct.rejected, (state, { payload }) => {
                state.ErrorType = payload;
            })
            // Delete Product Cases
            .addCase(DelProduct.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.SERVER_STATE = payload;
            })
            .addCase(DelProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(DelProduct.rejected, (state, { payload }) => {
                state.ErrorType = payload;
            });
    }
});

export default productSlice.reducer;
export const { ResetProductParams, SingleProduct } = productSlice.actions;
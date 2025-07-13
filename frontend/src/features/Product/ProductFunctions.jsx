import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../AxiosInstance";

// midlleware to pass token via request
AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('tk');
    if (token) config.headers.token = `Bearer ${token}`;
    return config;
},
    (error) => {
        console.log(error);
    }
);

// Slice Api Functions

const GetProducts = createAsyncThunk('Product/GetProducts', async (_) => {
    try {
        const res = await AxiosInstance.get('/GetPro');
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        return;
    }
});

const SetProduct = createAsyncThunk('Product/SetProduct', async (data) => {
    try {
        const res = await AxiosInstance.post('/AddProduct', data);
        console.log(res);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error.response;
    }
});

const EditProduct = createAsyncThunk('Product/EditProduct', async (data) => {
    try {
        const res = await AxiosInstance.post(`/AddProduct/${data?.id}`, data);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

const DelProduct = createAsyncThunk('Product/DelProduct', async ({ id }) => {
    try {
        const res = await AxiosInstance.post(`/AddProduct/${data?.id}`);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

export { GetProducts, SetProduct, EditProduct, DelProduct };
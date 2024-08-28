import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AxiosInst = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
    }
});

// midlleware to pass token via request
AxiosInst.interceptors.request.use((config) => {
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
        const res = await AxiosInst.get('/GetPro');
        return res.data;
    }
    catch (err) {
        return;
    }
});

const SetProduct = createAsyncThunk('Product/SetProduct', async (data) => {
    try {
        const res = await AxiosInst.post('/AddProduct', data);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

const EditProduct = createAsyncThunk('Product/EditProduct', async (data) => {
    try {
        const res = await AxiosInst.post(`/AddProduct/${data?.id}`, data);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

const DelProduct = createAsyncThunk('Product/DelProduct', async ({ id }) => {
    try {
        const res = await AxiosInst.post(`/AddProduct/${data?.id}`);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

export { GetProducts, SetProduct, EditProduct, DelProduct };
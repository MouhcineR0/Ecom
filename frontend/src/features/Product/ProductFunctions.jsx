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

const GetProducts = createAsyncThunk('Product/GetProducts', async (data) => {
    try {
        const res = await AxiosInstance.get(`/GetPro`, { params: data });
        if (data?.flashsales)
            return { products: res.data, flashsales: true }
        // res.data.flashsales = true;
        return res.data;
    }
    catch (err) {
        console.log(err)
        return;
    }
});

const SetProduct = createAsyncThunk('Product/SetProduct', async (data) => {
    try {
        const res = await AxiosInstance.post('/AddProduct', data, { headers: { "Content-Type": "multipart/form-data" } });
        console.log(res);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error.response;
    }
});

const EditProduct = createAsyncThunk('Product/EditProduct', async (data) => {
    console.log(data);
    try {
        const res = await AxiosInstance.put(`/editProduct/${data._id}`, data);
        console.log(res.data);
        return res.data;
    }
    catch (error) {
        console.log(error)
        return error.response;
    }
});

const DelProduct = createAsyncThunk('Product/DelProduct', async (id) => {
    try {
        const res = await AxiosInstance.delete(`/delProduct/${id}`);
        return res.data;
    }
    catch (error) {
        return error?.response;
    }
});

const AddCard = createAsyncThunk('Product/AddCard', async (data) => {
    try {
        const res = await AxiosInstance.post('/AddCard', data);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error?.response;
    }
})

const GetCard = createAsyncThunk('Product/GetCard', async (data) => {
    try {
        const res = await AxiosInstance.get(`/GetCard/${data}`);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error?.response;
    }
})

const DeleteCard = createAsyncThunk('Product/DeleteCard', async (data) => {
    try {
        const res = await AxiosInstance.delete(`/DeleteCard/${data}`);
        console.log(res.data);
        return res.data;
    }
    catch (error) {
        console.log(error);
        return error?.response;
    }
})

export { GetProducts, SetProduct, EditProduct, DelProduct, AddCard, GetCard, DeleteCard };
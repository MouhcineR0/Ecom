import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetProducts = createAsyncThunk('Product/GetProducts', async () => {
    try {
        const res = await axios.get(`${process.env.VITE_API_BASE_URL}/GetPro`);
        return res.data;
    }
    catch (err) {
        return;
    }
});

const SetProduct = createAsyncThunk('Product/SetProduct', async (data) => {
    try {
        const res = await axios.post(`${process.env.VITE_API_BASE_URL}/AddProduct`, data);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

export { GetProducts, SetProduct };
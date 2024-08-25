import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetProducts = createAsyncThunk('Product/GetProducts', async () => {
    try {
        const res = await axios.get(`${process.env.VITE_API_BASE_URL}/GetPro`);
        return res.data;
    }
    catch {
        
    }
});
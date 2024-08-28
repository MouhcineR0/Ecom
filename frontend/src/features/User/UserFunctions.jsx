import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const AxiosUserInstance = axios.create({
    baseURL: `${process.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
    }
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("tk");
    if (token) config.headers.token = `Bearer ${token}`;
    return config;
});

const Login = createAsyncThunk('User/Login', async (data) => {
    try {
        const res = await AxiosUserInstance.post("/login", data);
        return res.data;
    }
    catch (error) {
        return error.response;
    }
});

const Signup = createAsyncThunk('User/Signup', async (data) => {
    // Signup to be continued
});

export { Login, Signup };
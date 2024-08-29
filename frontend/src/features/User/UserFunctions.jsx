import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../AxiosInstance";

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("tk");
    if (token) config.headers.token = `Bearer ${token}`;
    return config;
});

const Login = createAsyncThunk('User/Login', async (data) => {
    try {
        const res = await AxiosInstance.post("/login", data);
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
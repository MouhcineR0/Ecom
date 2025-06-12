import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../AxiosInstance";

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("tk");
    if (token) config.headers.token = `Bearer ${token}`;
    return config;
});

const Login = createAsyncThunk('User/Login', async (data, thunk) => {
    try {
        const res = await AxiosInstance.post("/login", data);
        return res.data;
    }
    catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const Signup = createAsyncThunk('User/Signup', async (data) => {
    // Signup to be continued
});

export { Login, Signup };
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../AxiosInstance";

AxiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("tk");
    if (token) config.headers.token = `Bearer ${token}`;
    return config;
});

const Login = createAsyncThunk('User/Login', async (data, thunk) => {
    try {
        const res = await AxiosInstance.post("/user/login", data);
        return res.data;
    }
    catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const Signup = createAsyncThunk('User/Signup', async (data, thunk) => {
    try {
        const res = await AxiosInstance.post("/user/signup", data);
        return res.data;
    }
    catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const UpdateUser = createAsyncThunk('User/UpdateUser', async (data, thunk) => {
    try {
        const res = await AxiosInstance.patch("/user/update", data);
        return res.data;
    }
    catch (error) {
        return thunk.rejectWithValue(error.response.data);
    }
})

export { Login, Signup, UpdateUser };
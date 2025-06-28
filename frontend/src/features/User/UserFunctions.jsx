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


const GetUsers = createAsyncThunk('User/GetUsers', async (data, thunk) => {
    try {
        const res = await AxiosInstance.get("/user/GetUsers");
        return res.data;
    }
    catch (error) {
        return thunk.rejectWithValue(error.response.data);
    }
})

const AddSingleUser = createAsyncThunk('User/AddUser', async (data, thunk) => {
    try {
        const res = await AxiosInstance.post("/user/CreateAccount", data);
        return res.data;
    } catch (err) {
        return thunk.rejectWithValue(err);
    }
})

const DeleteSingleUser = createAsyncThunk('User/DeleteSingleUser', async (data, thunk) => {
    try {
        console.log("user functions ", data);
        const res = await AxiosInstance.delete("/user/DeleteUser", { data });
        return res.data;
    } catch (err) {
        return thunk.rejectWithValue(err);
    }
})

const UpdateSingleUser = createAsyncThunk('User/UpdateSingleUser', async (data, thunk) => {
    try {
        const res = await AxiosInstance.delete("/user/UpdateUser", { data });
        return res.data;
    } catch (err) {
        return thunk.rejectWithValue(err);
    }
})

export { Login, Signup, UpdateUser, GetUsers, AddSingleUser, DeleteSingleUser, UpdateSingleUser };
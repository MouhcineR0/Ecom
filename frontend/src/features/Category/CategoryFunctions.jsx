import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../AxiosInstance";

export const GetCategories = createAsyncThunk('GetCategories', async (data, thunk) => {
	try {
		const res = await AxiosInstance.get('/GetCat');
		return res.data;
	}
	catch (error) {
		return thunk.rejectWithValue(error);
	}
})


export const AddCategorie = createAsyncThunk('AddCategorie', async (data, thunk) => {
	try {
		const res = await AxiosInstance.post('/AddCategory', data);
		// if (res?.data?.QueryDone) {
		// 	GetCategories();
		// }
		return res.data;
	}
	catch (error) {
		return thunk.rejectWithValue(error);
	}
})

export const DelCategorie = createAsyncThunk('DelCategorie', async (data, thunk) => {
	try {
		const res = await AxiosInstance.delete(`/DelCategory/${data}`);
		console.log("second")
		return res.data;
	}
	catch (error) {
		return thunk.rejectWithValue(error);
	}
})
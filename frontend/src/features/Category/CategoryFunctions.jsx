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


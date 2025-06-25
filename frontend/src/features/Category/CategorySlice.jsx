import { createSlice } from "@reduxjs/toolkit"
import { GetCategories } from "./CategoryFunctions";

const initialState = {
	data: [],
	error: false,
	loading: false
};

const CategorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		ResetState: (state) => {
			state.error = false;
			state.loading = false;
			data = []
		}
	},
	extraReducers: (builder) => {
		builder.addCase(GetCategories.fulfilled, (state, { payload }) => {
			state = payload.data;
			state.loading = false;
		})
		builder.addCase(GetCategories.rejected, (state, { _ }) => {
			state.error = true;
			state.loading = false;
		})
		builder.addCase(GetCategories.pending, (state, { _ }) => {
			state.loading = true;
		})
	}
})

export default CategorySlice.reducer;
import { createSlice } from "@reduxjs/toolkit"
import { AddCategorie, DelCategorie, GetCategories } from "./CategoryFunctions";

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
			state.data = []
		},
		setError: (state, { payload }) => {
			state.error = payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(GetCategories.fulfilled, (state, { payload }) => {
			console.log(payload);
			state.data = payload.categories;
			state.loading = false;
		})
		builder.addCase(GetCategories.rejected, (state, { _ }) => {
			state.error = true;
			state.loading = false;
		})
		builder.addCase(GetCategories.pending, (state, { _ }) => {
			state.loading = true;
		})
		builder.addCase(AddCategorie.fulfilled, (state, { payload }) => {
			console.log(payload);
			// state.data = payload.categories;
			state.loading = false;
		})
		builder.addCase(AddCategorie.rejected, (state, { _ }) => {
			state.error = true;
			state.loading = false;
		})
		builder.addCase(AddCategorie.pending, (state, { _ }) => {
			state.loading = true;
		})
		builder.addCase(DelCategorie.fulfilled, (state, { payload }) => {
			state.loading = false;
		})
		builder.addCase(DelCategorie.rejected, (state, { _ }) => {
			state.error = true;
			state.loading = false;
		})
		builder.addCase(DelCategorie.pending, (state, { _ }) => {
			state.loading = true;
		})
	}
})

export default CategorySlice.reducer;
export const { ResetState, setError } = CategorySlice.actions;
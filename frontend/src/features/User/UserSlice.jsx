import { createSlice } from "@reduxjs/toolkit";
import { Login, Signup, UpdateUser } from "./UserFunctions";

const initialState = {
	user: {
		id: null,               // user id
		role: 'client',         // client or admin
		firstname: null,    // ismail
		lastname: null,
		email: null,
		address: null,
	},
	token: null,         // token from backend
	isAuth: false,      // true or false
	loading: false,
	error: null
};

const setIsLoading = (state) => {
	state.loading = true;
	state.error = null;
}

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setError: (state) => {
			state.error = null;
		},
		SignData: (state, { payload }) => {
			console.log(payload);
			state.user.firstname = payload.data.firstname;
			state.user.lastname = payload.data.lastname;
			state.user.id = payload.data.id;
			state.user.role = payload.data.role || 'client';
			state.user.email = payload.data.email;
			state.user.address = payload.data.address;
			state.isAuth = true;
		},
		ResetUserParams: (state) => {
			console.log("reset");
			state.user.role = null;
			state.user.firstname = null;
			state.user.lastname = null;
			state.user.id = null;
			state.error = null;
			state.isAuth = false;
			state.loading = false;
			state.token = null;
		},
		// end session
		Logout: () => {
			console.log("here");
			localStorage.removeItem('tk');
			// ResetUserParams();
		}
	},
	extraReducers: (builder) => {
		builder
			// login cases
			.addCase(Login.pending, setIsLoading)
			.addCase(Login.rejected, (state, { payload }) => {
				state.error = payload;
				console.log(payload);
				state.loading = false;
			})
			.addCase(Login.fulfilled, (state, { payload }) => {
				console.log(payload);
				state.loading = false;
				state.token = payload?.token;
				state.user.firstname = payload?.firstname;
				state.user.lastname = payload?.lastname;
				state.user.id = payload?.id;
				state.user.role = payload?.role;
				state.user.email = payload?.email;
				state.user.address = payload?.address;
				state.isAuth = true;
				state.error = null;
				localStorage.setItem('tk', payload?.token);
			})
			.addCase(Signup.pending, setIsLoading)
			.addCase(Signup.rejected, (state, { payload }) => {
				state.error = payload;
				state.loading = false;
			})
			.addCase(Signup.fulfilled, (state, { payload }) => {
				console.log(payload);
				state.loading = false;
				state.error = payload;
			})
			.addCase(UpdateUser.pending, setIsLoading)
			.addCase(UpdateUser.fulfilled, (state, { payload }) => {
				console.log("fulfilled ", payload);
				state.error = payload;
				state.loading = false;
			})
			.addCase(UpdateUser.rejected, (state, { payload }) => {
				console.log("rejected ", payload)
				state.error = payload;
				state.loading = false;
			});


		// signup cases

	}
});

export default UserSlice.reducer;
export const { ResetUserParams, Logout, setError, SignData } = UserSlice.actions;
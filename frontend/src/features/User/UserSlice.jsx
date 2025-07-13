import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AddSingleUser, DeleteSingleUser, GetUsers, Login, Signup, UpdateSingleUser, UpdateUser } from "./UserFunctions";

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
	error: null,
	Users: []
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
			console.log("payload => ", payload);
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
				if (payload?.code != "ERR_NETWORK")
					state.error = payload;
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
			})
			.addCase(GetUsers.pending, setIsLoading)
			.addCase(GetUsers.fulfilled, (state, { payload }) => {
				console.log(payload);
				state.Users = payload.Users;
				state.loading = false;
			})
			.addCase(GetUsers.rejected, (state, { payload }) => {
				state.error = true;
				state.loading = false;
			})
			.addCase(AddSingleUser.pending, setIsLoading)
			.addCase(AddSingleUser.fulfilled, (state, { payload }) => {
				console.log(payload);
				state.loading = false;
			})
			.addCase(AddSingleUser.rejected, (state, { payload }) => {
				state.error = true;
				state.loading = false;
			})
			// .addCase(DeleteSingleUser.pending, setIsLoading)
			// .addCase(DeleteSingleUser.fulfilled, (state, { payload }) => {
			// 	state.loading = false;
			// })
			// .addCase(DeleteSingleUser.rejected, (state, { payload }) => {
			// 	state.error = true;
			// 	state.loading = false;
			// })
			// .addCase(UpdateSingleUser.pending, setIsLoading)
			// .addCase(UpdateSingleUser.fulfilled, (state, { payload }) => {
			// 	state.loading = false;
			// })
			// .addCase(UpdateSingleUser.rejected, (state, { payload }) => {
			// 	state.error = true;
			// 	state.loading = false;
			// })
			.addMatcher(
				isAnyOf(DeleteSingleUser.pending, UpdateSingleUser.pending),
				(state) => {
					state.loading = true;
				}
			)
			.addMatcher(
				isAnyOf(DeleteSingleUser.rejected, UpdateSingleUser.rejected),
				(state) => {
					state.loading = false;
					state.error = true;
				}
			)
			.addMatcher(
				isAnyOf(DeleteSingleUser.pending, UpdateSingleUser.pending),
				(state) => {
					state.loading = true;
				}
			)
			;

	}
});

export default UserSlice.reducer;
export const { ResetUserParams, Logout, setError, SignData } = UserSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import { ResetParams } from "../Product/ProductSlice";
import { Login } from "./UserFunctions";

const initialState = {
    user: {
        id: null,               // user id
        role: 'client',         // client or admin
        firstname: 'rachid',    // ismail
        lastname: null,
    },
    token: null,         // token from backend
    isAuth: false,      // true or false
    loading: false,
    error: null
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ResetParams: (state) => {
            state.user?.role = null;
            state.user?.firstname = null;
            state.user?.lastname = null;
            state.user?.id = null;
            state.error = null;
            state.isAuth = false;
            state.loading = false;
            state.token = null;
        },
        // end session
        Logout: () => {
            localStorage.removeItem('tk');
            ResetParams();
        }
    },
    extraReducers: (builder) => {
        builder
            // login cases
            .addCase(Login.pending, (state) => {
                state.loading = true;
            })
            .addCase(Login.rejected, (state, { payload }) => {
                state.error = payload;
                state.loading = false;
            })
            .addCase(Login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.token = payload?.token;
                state.user.firstname = payload?.firstname;
                state.user.lastname = payload?.lastname;
                state.user.id = payload?._id;
                state.user.role = payload?.role;
                state.isAuth = true;
                state.error = null;
            });
    }
});

export default UserSlice.reducer;
export const { ResetParams, Logout } = UserSlice.actions;
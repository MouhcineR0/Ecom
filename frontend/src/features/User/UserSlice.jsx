import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        role: 'admin',         // client or admin
        firstname: 'rachid',    // ismail
        lastname: null,
    },
    token: null,         // token from backend
    isAuth: true,      // true or false
    loading: false,
    error: null
};

const UserSlice = createSlice({
    name: 'user',
    initialState
});

export default UserSlice.reducer;
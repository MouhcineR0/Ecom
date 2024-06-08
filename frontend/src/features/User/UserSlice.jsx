import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        role: null,         // client or admin
        firstname: null,    // ismail
        lastname: null,
    },
    token: null,         // token from backend
    isAuth: false,      // true or false
    loading: false,
    error: null
};

const UserSlice = createSlice({
    name: 'user',
    initialState
});

export default UserSlice.reducer;
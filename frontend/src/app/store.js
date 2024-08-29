import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/User/UserSlice';
import productReducer from '../features/Product/ProductSlice';
import AxiosInstance from "../features/AxiosInstance";


const AuthMiddleWare = store => next => action => {
    if (action.useAuthMiddleWare) {
        try {
            const token = localStorage.getItem('tk');
            const res = AxiosInstance.post('/isAuth', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        catch (err) {

        }
    }
};

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer
    },
    middleware: (DefaultMiddlewares) => DefaultMiddlewares().concat(AuthMiddleWare),
    devTools: import.meta.env.VITE_APP_DESC == "development",
});

export default store;
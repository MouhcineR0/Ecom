import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/User/UserSlice';
import productReducer from '../features/Product/ProductSlice';
import AxiosInstance from "../features/AxiosInstance";
import { FileFilled } from "@ant-design/icons";
import CategoryReducer from "../features/Category/CategorySlice";


const AuthMiddleWare = store => next => action => {
    if (action.useAuthMiddleWare) {
        try {
            const token = localStorage.getItem('tk');
            const res = AxiosInstance.post('/isAuth', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.isAuth) next(action);
            else window.location.href = '/login';
        }
        catch (err) {
            window.location.href = '/login';
        }
    }
};

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        category: CategoryReducer
    },
    // middleware: (DefaultMiddlewares) => DefaultMiddlewares().concat(AuthMiddleWare),
    devTools: import.meta.env.VITE_APP_DESC == "development",
});

export default store;
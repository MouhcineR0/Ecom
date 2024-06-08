import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({ children }) {

    const { isAuth, user: { role } } = useSelector(state => state.user);

    return (
        isAuth && role == 'admin' ? children : <Navigate to={'/login'} />
    );
}

export default AdminProtectedRoute;
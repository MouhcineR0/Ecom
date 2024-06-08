import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {

    const { isAuth, user: { role } } = useSelector(state => state.user);

    return (
        isAuth && role == 'client' ? children : <Navigate to={'/login'} />
    );
}

export default ProtectedRoute;
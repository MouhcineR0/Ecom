import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Error404 from '../../pages/Error404';

function AdminProtectedRoute({ children }) {

	const { isAuth, user: { role } } = useSelector(state => state.user);

	return (
		isAuth && role == 'admin' ? children : <Error404 />
	);
}

export default AdminProtectedRoute;
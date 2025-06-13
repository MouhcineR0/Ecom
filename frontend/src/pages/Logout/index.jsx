import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Logout, ResetUserParams } from '../../features/User/UserSlice';
import { Navigate } from 'react-router-dom';

function index() {

	const dispatch = useDispatch();

	// (() => dispatch(Logout()) && (() => dispatch(ResetUserParams()))
	// if ()
	dispatch(Logout());
	dispatch(ResetUserParams());
	return (
		<Navigate to={'/'} />
	)
}

export default index
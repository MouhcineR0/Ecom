import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ResetUserParams, SignData } from '../../features/User/UserSlice';
import AxiosInstance from '../../features/AxiosInstance';
import { message } from 'antd';

function ProtectedRoute({ children }) {

	// antd
	const [messageApi, contextHolder] = message.useMessage();

	const { isAuth, user: { role } } = useSelector(state => state.user);

	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		const setAuth = async () => {
			try {
				const res = await AxiosInstance.post('/isAuth', {}, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('tk')}`
					}
				});
				console.log(res);
				if (res.data?.isAuth)
					dispatch(SignData(res.data));
				else
					dispatch(ResetUserParams());
			}
			catch (err) {
				messageApi.warning('something went wrong , please reload or try later !');
			}
			finally {
				setLoading(false);
			}
		}
		setAuth();
	})
	return (!loading && (isAuth && role == 'client' ? children : <Navigate to={'/login'} />))
}

export default ProtectedRoute;
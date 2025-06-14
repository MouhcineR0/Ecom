import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/utils/Button';
import { useForm } from 'react-hook-form';
import { message, Progress } from 'antd';
import { UpdateUser } from '../../features/User/UserFunctions';
import { ResetUserParams, setError } from '../../features/User/UserSlice';
import zxcvbn from 'zxcvbn';

const PasswordLevels = [
	{ label: "Too Weak", color: "#f5222d", width: "20%" },
	{ label: "Weak", color: "#ff4d4f", width: "40%" },
	{ label: "Fair", color: "#faad14", width: "60%" },
	{ label: "Good", color: "#1890ff", width: "80%" },
	{ label: "Strong", color: "#52c41a", width: "100%" }
];

function Profile() {

	// redux
	const dispatch = useDispatch();
	const { user, isAuth, loading, error } = useSelector(state => state.user);

	// antd
	const [messageApi, contextHolder] = message.useMessage();

	const { register, handleSubmit, formState: { errors }, watch } = useForm({
		defaultValues: {
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			address: user.address
		}
	});
	const password_watch = watch('newpass1');

	const [LevelFeild, setLevelFeild] = useState(false);
	const [level, setLevel] = useState(0);

	useEffect(() => {
		if (password_watch) {
			const levelobj = zxcvbn(password_watch);
			setLevel(levelobj.score);
		}
		else
			setLevel(0);
	}, [password_watch])

	useEffect(() => {
		if (loading) {
			messageApi.open({
				type: 'loading',
				duration: 100000,
				content: "fetching data",
				key: 'loading_user_update'
			})
		}
		if (!loading && error?.QueryDone) {
			messageApi.destroy('loading_user_update');
			messageApi.success("Profile Updated Successufly !");
			messageApi.open({
				type: 'info',
				duration: 5,
				content: "Log out and log back so you can see the changes"
			})
			dispatch(setError());
			setTimeout(() => {
				window.location.reload();
			}, 3000);
		}
		else if (!loading && !error?.QueryDone && error?.message == 'WRONG_PASS') {
			messageApi.destroy('loading_user_update');
			messageApi.error("Current Password Feild is invalid !");
			dispatch(setError());
		}
		else if (!loading && !error?.QueryDone && error?.message == 'UPDATED_AT_ERR') {
			messageApi.destroy('loading_user_update');
			messageApi.error("Updates are allowed only 48 hours after your last change !");
			dispatch(setError());
		}
		else if (!loading && !error?.QueryDone && error?.message) {
			messageApi.destroy('loading_user_update');
			messageApi.error("Somethint went wrong, try later !");
			dispatch(setError());
		}
	}, [loading])

	const Submit = (data) => {
		if ((data.curr_password && (!data.newpass1 || !data.newpass2))
			|| (data.newpass1 && (!data.curr_password || !data.newpass2))
			|| (data.newpass2 && (!data.curr_password || !data.newpass1))
		) {
			messageApi.error("Complete all password feilds !");
			return;
		}
		else if (data.newpass1 != data.newpass2) {
			messageApi.error("different passwords !");
			return;
		}
		dispatch(UpdateUser(data));
	}

	const ErrorHandle = () => {
		console.log(errors);
		if (errors) {
			for (const err in errors) {
				if (errors[err].message) {
					messageApi.error(errors[err].message);
				}
				else
					return;
			}
		}
	}

	const name_validator = (value) => {
		if (value.trim().length < 3) {
			return "first and last name should be 3 or more letters !";
		}
	}

	// const password_validator = (value) => {
	// 	console.log(value);
	// 	const levelobj = zxcvbn(value);
	// 	setLevel(levelobj.score);
	// 	return level == 4;
	// }
	// const originalpass_validator = (value) => {
	// 	return value.length > 3;
	// }
	// const passwords_validator = (value) => {
	// 	if (value != password_watch)
	// 		return "different passwords !";
	// }

	return (
		<>
			<form className='profile-container px-[80px] py-[40px] flex flex-col gap-6' onSubmit={handleSubmit(Submit, ErrorHandle)} >
				{contextHolder}
				<div className='font-medium text-[20px] text-primary'>Edit Your Profile</div>
				<div className='flex justify-between items-center'>
					<div className="flex flex-col gap-2 w-[45%]">
						<h1 className='select-none'>First Name</h1>
						<input type="text" {...register('firstname', { validate: name_validator })} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					</div>
					<div className="flex flex-col gap-2 w-[45%]">
						<h1 className='select-none'>Last Name</h1>
						<input type="text" {...register('lastname', { validate: name_validator })} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<div className="flex flex-col gap-2 w-[45%]">
						<h1 className='select-none'>Email</h1>
						<input disabled type="text" {...register('email')} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					</div>
					<div className="flex flex-col gap-2 w-[45%]">
						<h1 className='select-none'>Address</h1>
						<input type="text" {...register('address')} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					</div>
				</div>
				<div className="password-feild flex flex-col gap-4">
					<h1 className='select-none'>Password Changes</h1>
					<input type="password" {...register('curr_password')} placeholder='Current Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					<input type="password" {...register('newpass1', {})} onBlur={() => setLevelFeild(false)} onFocus={() => setLevelFeild(true)} placeholder='New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					{LevelFeild && <Progress percent={level * 25} />}
					<input type="password" {...register('newpass2', {})} placeholder='Confirm New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				</div>
				<div className='flex items-center justify-end gap-6'>
					<h1>Cancel</h1>
					<Button Name={'Save Changes'} type={'submit'} />
				</div>
			</form >
		</>
	)
}

export default Profile
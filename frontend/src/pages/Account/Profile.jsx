import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/utils/Button';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { UpdateUser } from '../../features/User/UserFunctions';
import { ResetUserParams, setError } from '../../features/User/UserSlice';

function Profile() {

	// redux
	const dispatch = useDispatch();
	const { user, isAuth, loading, error } = useSelector(state => state.user);

	// antd
	const [messageApi, contextHolder] = message.useMessage();

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
			address: user.address
		}
	});

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
		}
		else if (!loading && !error?.QueryDone && error?.message) {
			messageApi.destroy('loading_user_update');
			messageApi.error("Somethint went wrong, try later !");
			dispatch(setError());
		}
	}, [loading])

	const Submit = (data) => {
		dispatch(UpdateUser(data));
	}

	const ErrorHandle = () => {
		console.log(errors);
		if (errors) {
			for (const err in errors) {
				messageApi.error(errors[err].message);
				messageApi.open()
				return;
			}
		}
	}

	const name_validator = (value) => {
		if (value.trim().length < 3) {
			return "first and last name should be 3 or more letters !";
		}
	}

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
					<input type="password" id="curr_password" placeholder='Current Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					<input type="password" id="newpass" placeholder='New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
					<input type="password" id="newpass2" placeholder='Confirm New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
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
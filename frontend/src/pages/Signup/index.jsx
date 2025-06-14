import React, { useEffect } from 'react';
import LoginImage from '../../assets/imgs/login/pic01.png';
import Button from '../../components/utils/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Signup } from '../../features/User/UserFunctions';
import { setError } from '../../features/User/UserSlice';

function index() {

	const { register, handleSubmit, formState: { errors } } = useForm();

	// redux
	const dispatch = useDispatch();
	const { error, loading } = useSelector(state => state.user);

	// antd 
	const [messageApi, contextHolder] = message.useMessage();

	const Error = (value) => {
		messageApi.error(value);
	};

	useEffect(() => {
		if (error?.message == "FAILED")
			Error("Email or phone number already used");
		else if (error?.message == "SUCCESS")
			messageApi.success("Account Created Successufly !")
		dispatch(setError());
	}, [error]);

	const onError = () => {
		if (errors) {
			for (const error in errors) {
				Error(errors[error].message);
				return;
			}
		}
	};

	const EmailPhoneValidate = (value) => {
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
		if (!value) {
			return "Email field is required";
		}
		if (!emailPattern.test(value)) {
			return "Please enter a valid Email";
		}
		return true;
	};

	const PhoneValidate = (value) => {
		const phonePattern = /^[0-9]{10}$/;
		if (!value) {
			return "Phone field is required";
		}
		if (!phonePattern.test(value)) {
			return "Please enter a Phone number";
		}
	};

	const PasswordValidate = (value) => {
		if (value.trim().length < 8) {
			return 'Password must be at least 8 characters long';
		}
		return true;
	};
	const FNameValidate = (value) => {
		if (!value) return 'FirstName is empty';
		if (value.trim().length <= 2) {
			return 'FirstName is less than 2 characters ! ';
		}
	};
	const LNameValidate = (value) => {
		if (!value) return 'LastName is empty';
		if (value.trim().length <= 2) {
			return 'LastName is less than 2 characters ! ';
		}
	};

	// handle submit
	const Submit = (data) => {
		dispatch(Signup(data));
	};

	const InputStyle = 'border-b-[1px] py-2 focus:outline-none';
	return (
		<form action="" onSubmit={handleSubmit(Submit, onError)} className='w-full'>
			{contextHolder}
			<div className='w-full flex flex-col justify-between items-center my-10 font-poppins md:flex-row gap-10 md:gap-0'>
				<img src={LoginImage} alt="" className='login-image-container w-[90%] md:w-[50%] md:order-1 order-2' />
				<div className="login-section flex flex-col gap-2 md:mx-auto self-center md:order-2 order-1">
					<h1 className='text-[36px] font-medium font-inter leading-[30px]'>Create an account</h1>
					<p className='text-[16px] font-poppins'>Enter your details below</p>
					<div className="inputs-container flex flex-col mt-4 gap-4">
						<input type='text' {...register('firstname', { validate: FNameValidate, })} placeholder='First Name' className={`${InputStyle} ${errors.firstname ? ' border-b-red-500' : ' border-b-gray-500'}`} />
						<input type='text' {...register('lastname', { validate: LNameValidate, })} placeholder='Last Name' className={`${InputStyle} ${errors.lastname ? ' border-b-red-500' : ' border-b-gray-500'}`} />
						<input type='text' {...register('tel', { validate: PhoneValidate, })} placeholder='Phone Number' className={`${InputStyle} ${errors.tel ? ' border-b-red-500' : ' border-b-gray-500'}`} />
						<input type='text' {...register('email', { validate: EmailPhoneValidate, })} placeholder='Email' className={`${InputStyle} ${errors.email ? ' border-b-red-500' : ' border-b-gray-500'}`} />
						<input type="password" {...register('password', { validate: PasswordValidate })} placeholder='Password' className={`${InputStyle} ${errors.password ? ' border-b-red-500' : ' border-b-gray-500'}`} />
					</div>
					<div className="buttons-container flex flex-col items-center justify-between mt-6 gap-2">
						<Button Name={'Create Account'} type={'submit'} />
						<div className="login-container-signup flex gap-2">
							<p>
								Already have account?
							</p>
							<Link className='underline' to={'/login'}>Login</Link>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default index;
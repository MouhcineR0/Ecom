import React, { useEffect } from 'react';
import LoginImage from '../../assets/imgs/login/pic01.png';
import Button from '../../components/utils/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../features/User/UserFunctions';

function index() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // redux
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    // antd
    const [messageApi, contextHolder] = message.useMessage();
    const Error = (value) => {
        messageApi.error(value);
    };

    // should verify internet connection also
    useEffect(() => {
        if (error)
            messageApi.error("invalid email or password, try again!");
    }, [error])

    useEffect(() => {
        if (errors) {
            for (const error in errors) {
                Error(errors[error].message);
            }
        }
    });

    const EmailPhoneValidate = (value) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const phonePattern = /^[0-9]{10}$/;
        if (!value) {
            // Error('Email field is required');
            return "Email field is required";
        }
        if (!emailPattern.test(value) && !phonePattern.test(value)) {
            // Error('Please enter a valid email or phone number');
            return "Please enter a valid email or phone number";
        }
        return true;
    };

    const PasswordValidate = (value) => {
        if (value.trim().length < 8) {
            // Error('Password must be at least 8 characters');
            return 'Password must be at least 8 characters';
        }
        return true;
    };

    // handle submit function
    const Submit = (data) => {
        console.log(data);
        dispatch(Login(data));
    };

    // style Inputs
    const InputStyle = 'border-b-[1px] py-2 focus:outline-none';
    return (
        <form action="" onSubmit={handleSubmit(Submit)} className='w-full'>
            {contextHolder}
            <div className='w-full flex flex-col justify-between items-center my-10 font-poppins md:flex-row gap-10 md:gap-0'>
                <img src={LoginImage} alt="" className='login-image-container w-[90%] md:w-[50%] md:order-1 order-2' />
                <div className="login-section flex flex-col gap-2 md:mx-auto self-center md:order-2 order-1">
                    <h1 className='text-[36px] font-medium font-inter leading-[30px]'>Log in to PrimeShop</h1>
                    <p className='text-[16px] font-poppins'>Enter your details below</p>
                    <div className="inputs-container flex flex-col mt-4 gap-4">
                        <input type='text' {...register('email', { validate: EmailPhoneValidate, })} placeholder='Email' className={`${InputStyle} ${errors.email ? ' border-b-red-500' : ' border-b-gray-500'}`} />
                        <input type="password" {...register('password', { validate: PasswordValidate })} placeholder='Password' className={`${InputStyle} ${errors.password ? ' border-b-red-500' : ' border-b-gray-500'}`} />
                    </div>
                    <div className="buttons-container flex items-center justify-between mt-6">
                        <Button Name={'Log in'} type={'submit'} />
                        <Link className='underline' to={'/forgotpassword'}>Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default index;
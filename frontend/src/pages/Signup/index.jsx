import React from 'react';
import LoginImage from '../../assets/imgs/login/pic01.png';
import Button from '../../components/utils/Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function index() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const EmailPhoneValidate = (value) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const phonePattern = /^[0-9]{10}$/;
        if (!value) {
            return "This field is required";
        }
        if (!emailPattern.test(value) && !phonePattern.test(value)) {
            return "Please enter a valid email or phone number";
        }
        return true;
    };

    const PasswordValidate = (value) => {
        if (value.trim().length < 8) {
            return 'Password must be at least 8 characters long"';
        }
        return true;
    };
    const NameValidator = () => {

    };
    console.log(errors);
    const Submit = (data) => {

        console.log(data);
    };

    const InputStyle = 'border-b-[1px] py-2 focus:outline-none';
    return (
        <form action="" onSubmit={handleSubmit(Submit)} className='w-full'>
            <div className='w-full flex flex-col justify-between items-center my-10 font-poppins md:flex-row gap-10 md:gap-0'>
                <img src={LoginImage} alt="" className='login-image-container w-[90%] md:w-[50%] md:order-1 order-2' />
                <div className="login-section flex flex-col gap-2 md:mx-auto self-center md:order-2 order-1">
                    <h1 className='text-[36px] font-medium font-inter leading-[30px]'>Create an account</h1>
                    <p className='text-[16px] font-poppins'>Enter your details below</p>
                    <div className="inputs-container flex flex-col mt-4 gap-4">
                        <input type='text' {...register('name', { validate: NameValidator, })} placeholder='Name' className={`${InputStyle} ${errors.email_number ? ' border-b-red-500' : ' border-b-gray-500'}`} />
                        <input type='text' {...register('email_number', { validate: EmailPhoneValidate, })} placeholder='Email or Phone Number' className={`${InputStyle} ${errors.email_number ? ' border-b-red-500' : ' border-b-gray-500'}`} />
                        <input type="password" {...register('password', { validate: PasswordValidate })} placeholder='Password' className={`${InputStyle} ${errors.password ? ' border-b-red-500' : ' border-b-gray-500'}`} />
                    </div>
                    <div className="buttons-container flex flex-col items-center justify-between mt-6 gap-2">
                        <Button Name={'Create Account'} type={'submit'} />
                        <div className="login-container-signup flex gap-2">
                            <p>
                                Already have account?
                            </p>
                            <Link className='underline'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default index;
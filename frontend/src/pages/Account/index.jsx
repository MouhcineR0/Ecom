import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, Outlet } from 'react-router-dom';

function index() {

	const { user, isAuth, loading } = useSelector(state => state.user);

	return (
		<div className='container m-auto my-12'>
			<div className="header flex my-12 justify-between font-poppins text-[16px]">
				<h1 className='flex gap-[10px]'>
					<span className='text-gray-600'>Home</span>
					<span>/</span>
					<span>My Account</span>
				</h1>
				<h1>
					Welcome! <span className='text-primary'>{user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}</span>
				</h1>
			</div>
			<div className="container-2 flex">
				<div className="left-container w-[30%] flex flex-col gap-5">
					<div className='flex flex-col gap-[8px] text-base font-normal text-gray-600'>
						<h1 className='font-medium text-base mb-[8px] text-black'>Manage My Account</h1>
						<NavLink to={'/account/profile'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>My Profile</NavLink>
						<NavLink to={'/account/address'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>Address Book</NavLink>
						<NavLink to={'/account/payment'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>My Payment Option</NavLink>
					</div>
					<div className='flex flex-col gap-[8px] text-base font-normal text-gray-600'>
						<h1 className='font-medium text-base mb-[8px] text-black'>My Orders</h1>
						<NavLink to={'/account/returns'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>My Returns</NavLink>
						<NavLink to={'/account/cencellations'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>My Cancellations</NavLink>
						<NavLink to={'/account/wishlist'} className={({ isActive }) => `ml-[35px] ${isActive && "text-primary"}`}>My WishList</NavLink>
					</div>
					{/* <div className='flex flex-col gap-[8px] text-base font-normal text-gray-600'>
						<h1 className='font-medium text-base mb-[8px] text-black'>Manage My Account</h1>
						<Link to={'/account/address'} className='ml-[35px]'>Address Book</Link>
						<Link to={'/account/payment'} className='ml-[35px]'>My Payment Option</Link>
					</div> */}
				</div>
				<div className="right-container w-full">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default index
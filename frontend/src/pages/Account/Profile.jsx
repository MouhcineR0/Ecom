import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/utils/Button';

function Profile() {

	const { user } = useSelector(state => state.user);
	console.log(user);
	return (
		<div className='profile-container px-[80px] py-[40px] flex flex-col gap-6'>
			<div className='font-medium text-[20px] text-primary'>Edit Your Profile</div>
			<div className='flex justify-between items-center'>
				<div className="flex flex-col gap-2 w-[45%]">
					<h1 className='select-none'>First Name</h1>
					<input type="text" name="" value={user.firstname} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				</div>
				<div className="flex flex-col gap-2 w-[45%]">
					<h1 className='select-none'>Last Name</h1>
					<input type="text" name="" value={user.lastname} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				</div>
			</div>
			<div className='flex justify-between items-center'>
				<div className="flex flex-col gap-2 w-[45%]">
					<h1 className='select-none'>Email</h1>
					<input type="text" name="" value={user.email} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				</div>
				<div className="flex flex-col gap-2 w-[45%]">
					<h1 className='select-none'>Address</h1>
					<input type="text" name="" value={user.address ? user.address : null} className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				</div>
			</div>
			<div className="password-feild flex flex-col gap-4">
				<h1 className='select-none'>Password Changes</h1>
				<input type="password" name="" id="curr_password" placeholder='Current Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				<input type="password" name="" id="newpass" placeholder='New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
				<input type="password" name="" id="newpass2" placeholder='Confirm New Password' className='px-[16px] py-[13px] font-light text-gray-600 rounded-sm bg-[#F5F5F5] focus:outline-pink-100' />
			</div>
			<div className='flex items-center justify-end gap-6'>
				<h1>Cancel</h1>
				<Button Name={'Save Changes'} type={'submit'} />
			</div>
		</div>
	)
}

export default Profile
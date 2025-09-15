import AboutPic from '../../assets/imgs/about.png'
import shop from '../../assets/icons/shop.png'

import React from 'react'

function index() {

	return (
		<div className='mx-auto my-12 flex flex-col container'>
			<h1 className='flex gap-[10px]'>
				<span className='text-gray-600'>Home</span>
				<span>/</span>
				<span>My Account</span>
			</h1>
			<div className='flex md:flex-row flex-col items-center justify-between md:gap-10 gap-5 w-full md:mt-[25px] mt-[50px]'>
				<div className='md:w-[50%] w-[90%] flex self-center flex-col mx-auto md:gap-11 gap-8'>
					<h1 className='font-inter md:text-[54px] text-[46px] md:leading-[64px] leading-[50px] tracking-[6%] font-semibold'>Our Story</h1>
					<p className='font-poppins md:leading-[26px] lg:text-[16px] md-text-[15px] text-[14px] leading-[20px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br />Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
				</div>
				<img className='md:w-[50%] w-[90%] rounded-sm' src={AboutPic} alt="" />
			</div>
			{/* {statistics} */}
			<div className='flex gap-5 container mx-auto items-center justify-center mt-10'>
				<div className='border hover:shadow-md transition-all rounded-md border-gray-500 flex flex-col gap-2 items-center justify-center min-w-[150px] py-[30px] px-[40px]'>
					<div className='bg-[#2f2e3062] rounded-full p-1'>
						<div className='bg-black p-1 rounded-full'>
							<img src={shop} className='w-[25px]' alt="" />
						</div>
					</div>
					<h1 className='text-[32px] font-bold font-inter'>10.5k</h1>
					<p className='font-poppins'>Sallers active our site</p>
				</div>
				<div className='border rounded-md border-gray-500 flex flex-col gap-2 items-center justify-center min-w-[150px] py-[30px] px-[40px]'>
					<div className='bg-[#2f2e3062] rounded-full p-1'>
						<div className='bg-black p-1 rounded-full'>
							<img src={shop} className='w-[25px]' alt="" />
						</div>
					</div>
					<h1 className='text-[32px] font-bold font-inter'>10.5k</h1>
					<p className='font-poppins'>Sallers active our site</p>
				</div>
				<div className='border rounded-md border-gray-500 flex flex-col gap-2 items-center justify-center min-w-[150px] py-[30px] px-[40px]'>
					<div className='bg-[#2f2e3062] rounded-full p-1'>
						<div className='bg-black p-1 rounded-full'>
							<img src={shop} className='w-[25px]' alt="" />
						</div>
					</div>
					<h1 className='text-[32px] font-bold font-inter'>10.5k</h1>
					<p className='font-poppins'>Sallers active our site</p>
				</div>
				<div className='border rounded-md border-gray-500 flex flex-col gap-2 items-center justify-center min-w-[150px] py-[30px] px-[40px]'>
					<div className='bg-[#2f2e3062] rounded-full p-1'>
						<div className='bg-black p-1 rounded-full'>
							<img src={shop} className='w-[25px]' alt="" />
						</div>
					</div>
					<h1 className='text-[32px] font-bold font-inter'>10.5k</h1>
					<p className='font-poppins'>Sallers active our site</p>
				</div>
			</div>
		</div >
	)
}

export default index
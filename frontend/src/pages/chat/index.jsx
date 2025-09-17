import React, { useEffect, useState } from 'react'
import { CiChat1, CiMenuBurger } from 'react-icons/ci'
import { FaCaretDown } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";


function index() {

	const [ChatVisibility, setChatVisibility] = useState(true);

	useEffect(() => {

	}, []);

	const Chat = () => {
		return (
			<div className='w-[450px] h-[500px] bg-white right-7 bottom-24 rounded-md fixed z-[999]'>
				<div className='bg-primary py-3 px-5 rounded-t-md text-white font-semibold font-inter flex w-full justify-between items-center'>
					<p>
						PrimeShop AI
					</p>
					<RxHamburgerMenu size={25} className='cursor-pointer' />
				</div>
			</div>
		)
	}

	return (
		<>
			<div className='fixed right-7 bottom-7'>
				<div className='p-3 bg-primary rounded-full cursor-pointer selection:none' onClick={() => setChatVisibility(!ChatVisibility)}>
					{
						ChatVisibility ?
							<FaCaretDown color='white' size={35} />
							:
							<CiChat1 color='white' size={35} />
					}
				</div>
			</div>
			{ChatVisibility && <Chat />}

		</>
	)
}

export default index
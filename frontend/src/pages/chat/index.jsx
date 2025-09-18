import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiChat1, CiMenuBurger } from 'react-icons/ci'
import { FaCaretDown } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";
import AxiosInstance from '../../features/AxiosInstance';
import { message } from 'antd';
import bot from "../../assets/icons/bot.png"

const userStyle = "bg-primary py-3 px-3 text-white flex self-end rounded-md max-w-[70%] shadow-sm break-all";
const aiStyle = "bg-[#e5e5e5] text-[#333333] py-3 px-3 text-white flex self-start rounded-md max-w-[70%] shadow-sm break-all";

function index() {

	const [ChatVisibility, setChatVisibility] = useState(false);
	const [Content, setContent] = useState("");

	useEffect(() => {

	}, []);

	const AppendMessages = (Message, role) => {
		const div = document.createElement("div");
		if (role == "user")
			div.className = `user ${userStyle}`;
		else
			div.className = `ai ${aiStyle}`;
		div.textContent = Message;
		document.getElementById("discussions").appendChild(div);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		AppendMessages(Content, "user");
		const msg = Content;
		setContent("");
		try {
			const res = await AxiosInstance.post("/gpt", { message: msg });
			console.log(res.data);
			AppendMessages(res.data.data, "ai");
		}
		catch (_) {
			message.error("Failing texting ShopPrime AI");
		}
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
			{ChatVisibility &&
				(
					<div className='w-[450px] h-[500px] bg-white right-7 bottom-24 rounded-md fixed z-[999] shadow-lg flex flex-col'>
						<div className='bg-primary py-3 px-5 rounded-t-md text-white font-semibold font-inter flex w-full justify-between items-center'>
							<p>
								PrimeShop AI
							</p>
							<RxHamburgerMenu size={25} className='cursor-pointer' />
						</div>
						<div id='discussions' className='discussions text-[14px] h-full w-full overflow-y-scroll flex flex-col p-2 gap-1'>
							<div className='flex gap-3 justify-center'>
								<img src={bot} alt="" className='self-end' width={35} />
								<div className='flex flex-col'>
									<h1 className='text-[#545454] text-[12px] mb-2'>PrimShopAI</h1>
									<div className={aiStyle}>
										👋 Hi! I'm Apollo, an AI Assistant. Ask me anything about tawk.to!
									</div>
								</div>
							</div>
						</div>
						<div className='text-black w-full'>
							<form action="" onSubmit={handleSubmit}>
								<input type="text" value={Content} autoFocus={ChatVisibility} onChange={(e) => setContent(e.target.value)} id="" className='fixed w-full px-3 py-2 hover:shadow-[0_-7px_29px_rgba(100,100,111,0.2)] transition-all border-t-[1px] focus:outline-none outline-none focus:border-0' placeholder='Type and press [enter]..' />
							</form>
						</div>
					</div >
				)
			}

		</>
	)
}

export default index
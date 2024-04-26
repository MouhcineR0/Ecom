import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";



function RHeader() {

    const [Toggle, setToggle] = useState(false);

    const [Search, setSearch] = useState(false);

    useEffect(() => {
        if (Search) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [Search]);

    useEffect(() => {
        if (Toggle) {
            setSearch(false);
        }
    }, [Toggle]);
    const HandleToggle = () => {
        setToggle(!Toggle);
    };

    const HandleSearch = () => {
        setSearch(!Search);
    };

    return (
        <>
            <div className='flex p-3 container mx-auto justify-between mt-4 border-b-2 z-21'>
                <h1 className='text-black text-3xl font-bold font-inter'>Kha'zix</h1>
                <div className='flex gap-3'>
                    <CiSearch size={28} onClick={HandleSearch} className='cursor-pointer' />
                    <IoIosMenu size={28} onClick={HandleToggle} className='cursor-pointer' />
                </div>
                <Menu className={Toggle ? 'left-0' : 'left-[-150%]'}>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[22px] font-bold font-poppins tracking-wider'>WELCOME GUEST</h1><IoMdClose className='absolute top-4 right-4 x-icon cursor-pointer' onClick={HandleToggle} size={32} />
                        <Link className='text-[#adaeb0] font-inter underline'>Login / Signup</Link>
                        <hr className='grey h-[2px]' />
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h1 className='text-[#adaeb0]'>SHOP IN</h1>
                        <Link className=''>Men</Link>
                        <Link className=''>Women</Link>
                        <Link className=''>Mobile</Link>
                        <Link className=''>Laptop</Link>
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <h1 className='text-[#adaeb0]'>Services</h1>
                        <Link className=''>Help & Support</Link>
                        <Link className=''>Feedback & Suggestions</Link>
                    </div>
                </Menu>
            </div>
            <form className={`absolute z-[50] w-full ${Search ? 'translate-x-[0]' : 'translate-x-[-150%]'}`}>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Search" required />
                </div>
            </form>
            {Search && <Darkness onClick={HandleSearch} />}
        </>
    );
}

const Menu = styled.div`
    transition: .3s;
    padding : 12px;
    color : #000000d9;
    font-weight: 500;
    position: absolute;
    font-size: 18px;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 100;
    display: none;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
        display: flex;
    }
`;
const Darkness = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #00000094;
    position: absolute;
    z-index: 20;
`;

export default RHeader;
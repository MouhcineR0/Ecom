import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

function SideBar() {


    return (
        <div className='flex flex-col gap-1 pt-5 p-2 border-r-2 w-[20%] border-[#e5e5e5] text-[15px] font-poppins'>
            <Link className='flex items-center gap-1 hover:underline'>Woman's Fashion<IoIosArrowForward /></Link>
            <Link className='flex items-center gap-1 hover:underline'>Men's Fashion<IoIosArrowForward /></Link>
            <Link className='hover:underline'>Electronics</Link>
            <Link className='hover:underline'>Home & Lifestyle</Link>
            <Link className='hover:underline'>Medicine</Link>
            <Link className='hover:underline'>Sports & Outdoor</Link>
            <Link className='hover:underline'>Baby's & Toys</Link>
            <Link className='hover:underline'>Health & Beauty</Link>
        </div>
    );
}

export default SideBar;
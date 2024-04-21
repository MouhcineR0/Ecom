import { Input } from '@material-tailwind/react';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import NavLink, { Links } from './NavLink';
import styled from 'styled-components';




function Header() {

    const IconStyle = {
        fontSize: 27,
        color: '#4f4b4b',
        cursor: 'pointer'
    };

    return (
        <HeaderContainer className='mt-3 w-full border-b-2 py-4'>
            <div className="container flex justify-between mx-auto items-center ">
                <h1 className='text-black text-3xl font-bold font-inter'>Kha'zix</h1>
                <nav className='flex font-poppins lg:text-[17px] md:text-[15px] items-center gap-4 tracking-wider'>
                    {Links.map((ele, ind) => {
                        return <NavLink link={ele.link} url={ele.url} key={ind} classes={'link-underline link-underline-black '} />;
                    })}
                </nav>
                <div className='flex gap-4 w-[270px] items-center'>
                    <Input label='Search Products' icon={<CiSearch />} />
                    <FaRegHeart style={IconStyle} />
                    <FiShoppingCart style={IconStyle} />
                </div>
            </div>
        </HeaderContainer>
    );
}
const HeaderContainer = styled.div`
    margin-top: 12px;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    padding: 1rem 0;
`;

export default Header;
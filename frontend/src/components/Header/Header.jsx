import { Input } from '@material-tailwind/react';
import React, { useMemo, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import NavLink, { Links } from './NavLink';
import styled from 'styled-components';
import { Badge, Button, Popover } from 'antd';
import UserIMG from '../../assets/imgs/user/user.png';
import { CiUser } from "react-icons/ci";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBan, faRightFromBracket, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const text = <span>Title</span>;

const linksData = [
    { icon: faUser, text: 'Manage My Account', to: '/account' },
    { icon: faBagShopping, text: 'My Orders', to: '/orders' },
    { icon: faBan, text: 'My Cancellations', to: '/cancellations' },
    { icon: faStar, text: 'My Reviews', to: '/reviews' },
    { icon: faRightFromBracket, text: 'Logout', to: '/logout' },
];

const content = (
    <div className='flex flex-col p-0 text-white gap-2 items-start'>
        {linksData.map((link, index) => (
            <Link key={index} to={link.to} className='flex items-center gap-2'>
                <FontAwesomeIcon size='xl' icon={link.icon} />
                <h1>{link.text}</h1>
            </Link>
        ))}
    </div>
);


function Header() {
    const [arrow, setArrow] = useState('Show');

    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }

        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    const IconStyle = {
        fontSize: 27,
        color: '#4f4b4b',
        cursor: 'pointer'
    };
    const auth = true;

    return (
        <HeaderContainer className='mt-3 w-full border-b-2 py-4'>
            <div className="container flex justify-between mx-auto items-center ">
                <Link to={'/'} className='text-black text-3xl font-bold font-inter select-none'>PrimeShop</Link>
                <nav className='flex font-poppins lg:text-[17px] md:text-[15px] items-center gap-4 tracking-wider'>
                    {Links.map((ele, ind) => {
                        return <NavLink link={ele.link} url={ele.url} key={ind} classes={'link-underline link-underline-black '} />;
                    })}
                </nav>
                <div className='flex gap-4 items-center'>
                    <form action="">
                        <Input label='Search Products' icon={<CiSearch />} />
                    </form>
                    <Badge size='small' count={0} className='cursor-pointer'>
                        <FaRegHeart style={IconStyle} size={20} />
                    </Badge>
                    <Badge size='small' count={0} className='cursor-pointer'>
                        <Link to={'/card'}>
                            <FiShoppingCart style={IconStyle} size={20} />
                        </Link>
                    </Badge>
                    {
                        auth ? (
                            <div className="user-container select-none cursor-pointer">
                                <Popover placement="bottom" content={content} color='#000000a2' arrow={mergedArrow}>
                                    <img src={UserIMG} alt="" draggable={false} />
                                </Popover>
                            </div>
                        ) : null
                    }
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
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ To, Name }) {
    return (
        <Link to={To} className='bg-primary text-white px-[48px] py-[16px] md:text-[16px] text-[14px] rounded-[4px] font-poppins font-medium hover:text-primary hover:bg-white border hover:border-primary transition-all duration-300'>{Name}</Link>
    );
}

export default Button;
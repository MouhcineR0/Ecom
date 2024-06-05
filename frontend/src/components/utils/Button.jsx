import React from 'react';
import { Link } from 'react-router-dom';

function Button({ To, Name, className, type, onClick }) {
    {
        if (type == 'submit') {
            return (
                <button type='submit' onClick={onClick ? onClick : null} className={`bg-primary text-white px-[48px] py-[16px] md:text-[16px] text-[14px] rounded-[4px] font-poppins font-medium hover:text-primary hover:bg-white border hover:border-primary transition-all duration-300 ${className ? className : null}`}>{Name}</button>
            );
        }
        return (
            <Link to={To} onClick={onClick ? onClick : null} className={`bg-primary text-white px-[48px] py-[16px] md:text-[16px] text-[14px] rounded-[4px] font-poppins font-medium hover:text-primary hover:bg-white border hover:border-primary transition-all duration-300 ${className ? className : null}`}>{Name}</Link>
        );

    }
}

export default Button;
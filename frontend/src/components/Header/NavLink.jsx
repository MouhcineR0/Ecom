import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({ link, url, classes }) {


    return (
        <Link to={url} className={classes}>{link}</Link>
    );
}
export const Links = [
    {
        link: 'Home',
        url: '/',
    },
    {
        link: 'Contact',
        url: '/contact',
    },
    {
        link: 'About',
        url: '/about',
    },
    {
        link: 'Sign Up',
        url: '/signup',
    },
];

export default NavLink;
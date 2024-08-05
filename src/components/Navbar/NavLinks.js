import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-50 hover:text-blue-200" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-50 hover:text-blue-200" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-50 hover:text-blue-200" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-50 hover:text-blue-200" to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;

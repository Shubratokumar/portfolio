import React from 'react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='h-[250px] bg-primary text-white'>
            <div className='flex flex-col justify-center align-center'>
                <div>
                    <Link to="/"><img src={logo} className="mask mask-hexagon-2 w-14" alt="" /></Link> 
                </div>
            </div>        
        </footer>
    );
};

export default Footer;
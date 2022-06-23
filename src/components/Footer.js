import React from 'react';
import logo2 from "../assets/images/logo2.png";
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className='h-[400px] bg-primary text-white py-20 px-10'>
            <ScrollToTop
                color="#7510F7"
                smooth
                viewBox="0 0 24 24"
                svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
            />
            {/* <ScrollToTop smooth  top="20" color="#7510F7"/> */}
            <div className='flex flex-col justify-center items-center'>
                    <Link to="/"><img src={logo2} className="mask mask-hexagon-2 w-14" alt="" /></Link>
                    <h2 className='text-4xl lg:text-5xl py-5 text-center'>Let's Make Different.</h2>
            </div>        
                <div className='flex justify-center items-center '>
                    <a className="text-2xl p-3 hover:text-secondary" href="https://github.com/Shubratokumar" target="_blank" rel="noopener noreferrer"><BsGithub ></BsGithub></a>
                    <a className="text-2xl p-3 hover:text-secondary" href="https://www.linkedin.com/in/shubrato-kumar-a381511a4/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
                    <a className="text-3xl p-3 hover:text-secondary" href="mailto:shubratokumargharami920@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail></MdEmail></a>
                    <a className="text-2xl p-3 hover:text-secondary" href="https://web.facebook.com/shubratokumar.gharami" target="_blank" rel="noopener noreferrer"><BsFacebook></BsFacebook></a>
                </div>
                <div className='flex justify-center items-center py-5 '>
                    <p className=" uppercase">Shubrato kumar {" "}
                     <span className='text-pink-700'> &copy; {new Date().getFullYear()}</span>
                    </p>
                </div>
        </footer>
    );
};

export default Footer;
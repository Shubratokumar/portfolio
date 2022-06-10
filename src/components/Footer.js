import React from 'react';
import logo2 from "../assets/images/logo2.png";
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='h-[400px] bg-primary text-white py-20 px-10'>
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
                    <p className=" uppercase text-lime-500">Shubrato kumar {" "}
                     <span> &copy; {new Date().getFullYear()}</span>
                    </p>
                </div>
        </footer>
    );
};

export default Footer;
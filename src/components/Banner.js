import React from "react";
import profile from "../assets/images/profile.png";
import banner from "../assets/images/banner.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useTypewriter, Cursor} from 'react-simple-typewriter'
// import { Typewriter } from 'react-simple-typewriter'
// import Particle from "./Particles/Particle";

const Banner = () => {
  const {text} = useTypewriter({
    words: ['Web Developer', 'Frontend Developer', 'Jr. MERN Stack Developer', 'Tech Enthusiastic'],
    loop: 0
  })
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={profile} className="mask mask-hexagon-2 w-80" alt="" />
        <div className="my-10 text-center px-10">
        <p className='text-2xl font-light'>Hi, my name is </p>
          <h1 className='font-bold text-4xl lg:text-5xl pb-4'><span className="text-pink-700">Shubrato Kumar Gharami .</span></h1>
          <p className='text-2xl font-light'>I'm a </p>
          <h1 className="font-bold text-4xl lg:text-5xl pb-4">
            <span className="text-secondary">
              {text}
              <Cursor />
               .
            </span>
              {/* <span className="text-secondary">
              <Typewriter
                words={['Web Developer', 'Frontend Developer', 'Jr. MERN Stack Developer', 'Tech Enthusiastic']}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={500}
              />
            </span> */}            
          </h1>
          <p className="font-light text-2xl">
            I love what I do. I enjoy making simple things beautiful by Coding
            and Developing.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <a
            className="text-2xl p-3 hover:text-secondary"
            href="https://github.com/Shubratokumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            className="text-2xl p-3 hover:text-secondary"
            href="https://www.linkedin.com/in/shubrato-kumar-a381511a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            className="text-3xl p-3 hover:text-secondary"
            href="mailto:shubratokumargharami920@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail></MdEmail>
          </a>
          <a
            className="text-2xl p-3 hover:text-secondary"
            href="https://web.facebook.com/shubratokumar.gharami"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook></BsFacebook>
          </a>
        </div>
        <div className='flex justify-center items-center mt-3'>
            <img src={banner} className="w-80 lg:w-6/12" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

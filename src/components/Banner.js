import React from "react";
import profile from "../assets/images/profile.png";
import banner from "../assets/images/banner.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={profile} className="mask mask-hexagon-2 w-80" alt="" />
        <div className="my-10 text-center px-10">
          <h1 className="font-bold text-4xl lg:text-5xl pb-4">
            Frontend Developer
          </h1>
          <p className="font-light lg:text-lg">
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

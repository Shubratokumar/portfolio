import React from 'react';
import profile from "../assets/images/profile.png";

const AboutMe = () => {
    return (
        <section className='min-h-screen  p-10 lg:py-20 bg-cyan-50'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-5">
                <div className="">
                    <img src={profile} className="mask mask-hexagon-2 w-80" alt="" />
                </div>
                <div className=''>
                    <p className='text-2xl font-light'>Hello, my name is </p>
                    <h1 className='font-bold text-4xl lg:text-5xl pb-4'>Shubrato Kumar Gharami. Nice to meet you.</h1>
                    <p className='font-light lg:text-lg text-justify'>I love what I do. I enjoy making simple things beautiful by Coding and developing. Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p> 

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
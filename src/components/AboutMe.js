import React from 'react';
import profile from "../assets/images/profile.png";

const AboutMe = () => {
    return (
        <section className='min-h-screen  p-10 lg:py-20 bg-cyan-50'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center gap-5">
                <div data-aos="fade-right" >
                    <img src={profile} className="mask mask-hexagon-2 w-80" alt="" />
                </div>
                <div data-aos="fade-left" >
                    <p className='text-2xl font-light'>Hello, my name is </p>
                    <h1 className='font-bold text-4xl lg:text-5xl pb-4'>Shubrato Kumar Gharami. Nice to meet you.</h1>
                    <p className='font-light lg:text-lg text-justify'> I am a Frontend Developer, still a learner, looking for a full time job. I’m skilled with JavaScript, React JS and exploring new technologies for intensify my career as well as enhance knowledge. As a Frontend Developer, I take my work seriously and ensure my skills are kept up to date within this rapidly changing industry. Now, I’m looking for a radical change in my career. I hope to find what I am looking for and ready to bestow everything I’ve learned. I love what I do. I enjoy making simple things beautiful by Coding and developing.  I want to remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my skills.</p> 
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
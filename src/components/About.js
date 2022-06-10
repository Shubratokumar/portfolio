import React from 'react';

const About = () => {
    return (
        <div className='min-h-screen  p-10 lg:py-20 bg-primary'>
            <div className='flex flex-col justify-center items-center'>
                    <div className='my-10 text-center text-white w-full lg:w-6/12'>
                            <p className='text-xl'>Hi, my name is </p>
                                <h1 className='font-bold text-4xl lg:text-5xl pb-4'>Shubrato Kumar Gharami. Nice to meet you.</h1>
                                <p className='font-light lg:text-lg text-justify'>I love what I do. I enjoy making simple things beautiful by Coding and developing. Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p> 
                    </div>
                </div>
        </div>
    );
};

export default About;
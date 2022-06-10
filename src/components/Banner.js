import React from 'react';
import profile from "../assets/images/profile.png";
import banner from "../assets/images/banner.jpg"

const Banner = () => {
    return (
        <div >
            <div className='flex flex-col justify-center items-center'>
                    <img src={profile} className='mask mask-hexagon-2 w-80' alt="" />
                    <div className='my-10 text-center px-10'>
                            <h1 className='font-bold text-4xl lg:text-5xl pb-4'>Frontend Developer</h1>
                            <p className='font-light lg:text-lg'>I love what I do. I enjoy making simple things beautiful by Coding and developing.</p>                        
                    </div>
                    <img src={banner} className='w-80 lg:w-6/12' alt="" />
            </div>
        </div>
    );
};

export default Banner;
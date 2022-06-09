import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;
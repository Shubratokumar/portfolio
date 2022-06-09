import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React from 'react';
import './Home.css'
import Services from './Services';
import Container from '../../Components/Reuse/Container/Container';
import Testimonials from './Testimonials';
import About from './About';
import Achievements from './Achievements';
import Banner from './Banner';
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
        <div className='bg-black'>
        <Helmet>
            <title>DevCraft||Home</title>
          </Helmet>
        <Container>
         <div className='space-y-10 pt-8 lg:px-0 px-2'>
                <Services></Services>
                <Achievements></Achievements>
                <Testimonials></Testimonials>
                <About></About>
            </div>
         </Container>
        </div>
        </div>
    );
}

export default Home;

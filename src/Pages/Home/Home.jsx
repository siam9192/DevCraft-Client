import React from 'react';
import Banner from './banner';
import './Home.css'
import Services from './Services';
import Container from '../../Components/Reuse/Container/Container';
import Testimonials from './Testimonials';
import About from './About';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
        <div className='bg-black'>
        <Container>
         <div className='space-y-10 pt-8 lg:px-0 px-2'>
                <Services></Services>
                <Testimonials></Testimonials>
                <About></About>
            </div>
         </Container>
        </div>
        </div>
    );
}

export default Home;

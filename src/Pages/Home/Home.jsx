import React from 'react';
import Banner from './banner';
import './Home.css'
import Services from './Services';
import Container from '../../Components/Reuse/Container/Container';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
        <div className='bg-slate-200'>
        <Container>
         <div className='space-y-10 pt-8'>
                <Services></Services>
                <Testimonials></Testimonials>
            </div>
         </Container>
        </div>
        </div>
    );
}

export default Home;

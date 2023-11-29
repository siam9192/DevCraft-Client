import React from 'react';
import Container from '../../Components/Reuse/Container/Container';
const Banner = () => {
    return (
        <div className='banner min-h-[90vh]'>
          <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='py-20 '>
          <h1 className='md:text-7xl text-5xl text-white font-oswlad space-y-3'>"Elevate Your Workforce <span className='text-[#ffcc00]'>Experience </span> <br /> with Our <span className='text-[#ffcc00]'>Employee</span> Management Platform"</h1>
          </div>
          <div>

          </div>
          </div>
          </Container>
        </div>
    );
}

export default Banner;

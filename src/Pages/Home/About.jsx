import React from 'react';

const About = () => {
    return (
        <div className='grid md:grid-cols-2 font-inter pb-5 '>
          <div className='bg-yellow-500 p-5 space-y-4'>
            <h1 className='text-3xl text-black font-semibold'>About us</h1>
            <p className='text-black'>Welcome to [Your Company Name] – your partner in redefining employee management. We are driven by a passion for simplifying HR processes and enhancing the employee experience. Our cutting-edge technology, user-centric design, and  unwavering commitment to security and compliance make us a trusted choice for businesses looking to optimize their workforce. [Your Company Name] is a dedicated team of HR and tech professionals, committed to making a positive impact on how businesses operate. Connect with us for transparent communication and support as we shape the future of work together.</p>
          </div>
          <div>
            <img src="/banner/banner3.jpg" alt="" />
          </div>
        </div>
    );
}

export default About;

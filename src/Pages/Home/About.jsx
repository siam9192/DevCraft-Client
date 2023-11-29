import React from 'react';

const About = () => {
    return (
        <div className='grid md:grid-cols-2 font-inter pb-5 '>
          <div className='bg-yellow-500 p-5 space-y-4'>
            <h1 className='text-3xl text-black font-semibold'>About us</h1>
            <p className='text-black'>At DevCraft Solutions, we're not just building software; we're crafting solutions for the future. Since 2014, we've been at the forefront of innovation, creating custom software, mobile apps, and web solutions that redefine possibilities.

Why DevCraft Solutions?

    Innovative Solutions: We're driven by a passion for innovation, exploring the latest technologies to deliver cutting-edge solutions.

    Customer Focus: Your success is our priority. We work closely with clients to understand their unique needs and provide tailored, quality-driven results.

Our Expertise

    Custom Software Development: Precision-crafted solutions to meet your business needs.

    Mobile App Development: Engaging and intuitive apps for iOS and Android.

    Web Development: Robust, scalable web solutions for lasting impact.

Join the Digital Revolution

Whether you're a startup with big dreams or an established enterprise seeking digital transformation,DevCraft Solutions is your strategic technology partner. Let's build something extraordinary together.</p>
          </div>
          <div>
            <img src="/banner/banner3.jpg" alt="" />
          </div>
        </div>
    );
}

export default About;

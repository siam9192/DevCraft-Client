import React from 'react';
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
const Achievements = () => {
    return (
        <div>
            <h1 className='text-4xl text-white font-semibold text-center font-inter'>Consulting success</h1>
            <p className='text-white text-center font-semibold'>As a seasoned consultant, I bring a track record of delivering strategic <br /> insights and actionable solutions to clients across diverse industries. My success in consulting is built upon a foundation of:</p>
            <div className='grid md:grid-cols-2 gap-5 md:px-32 px-10 py-5'>
                 <div className='p-6 bg-yellow-400 flex  justify-center items-center rounded-lg'>
                    <div className='text-white'>
                        <FaProjectDiagram className='text-8xl'></FaProjectDiagram>
                        <h1 className='text-4xl font-semibold'>Projects</h1>
                        <h1 className='text-4xl font-semibold'>1700+</h1>
                    </div>
                 </div>
                 <div className='p-6 bg-blue-600 flex  justify-center items-center rounded-lg'>
                    <div className='text-white'>
                        <IoIosPerson className='text-8xl'></IoIosPerson>
                        <h1 className='text-4xl font-semibold'>Clients</h1>
                        <h1 className='text-4xl font-semibold'>2500+</h1>
                    </div>
                 </div>
                 <div className='p-6 bg-blue-600 flex  justify-center items-center rounded-lg'>
                    <div className='text-white text-center'>
                        <RiTeamFill className='text-8xl'></RiTeamFill>
                        <h1 className='text-4xl font-semibold'>Our team</h1>
                        <h1 className='text-4xl text-center font-semibold'>54</h1>
                    </div>
                 </div>
                 <div className='p-6 bg-yellow-400 flex  justify-center items-center rounded-lg'>
                    <div className='text-white text-center'>
                        <FaAward className='text-8xl'></FaAward>
                        <h1 className='text-4xl font-semibold'>Awards</h1>
                        <h1 className='text-4xl font-semibold text-center'>30</h1>
                    </div>
                 </div>
                 <div>
                 </div>
            </div>
        </div>
    );
}

export default Achievements;

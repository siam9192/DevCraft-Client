import React from 'react';
import { MdDashboard } from 'react-icons/md';

const Dashboardbar = ({pathName,barText}) => {
    return (
        <div className='w-full bg-white py-8 px-3 md:flex justify-between items-center shadow-md rounded-md '>
       <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className=' '>Dashboard/{pathName}</h3></div>
       <h3 className='text-2xl font-semibold md:none lg:block'>{barText}</h3>
        </div>
    );
}

export default Dashboardbar;

import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('Json/Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h1 className='text-white text-center text-4xl font-semibold font-inter'>Our features & services</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 selection:marker:'>
     {
            services.map((service,index)=>{
                return <div className='p-5 font-pop shadow-xl rounded-md bg-white hover:bg-blue-700'>
                     <img src={service.images} alt="" className='h-72'/>
                     
                     <h1 className='text-2xl  text-black '>{service.service}</h1>
                </div>
            })
         }
     </div>
        </div>
    );
}

export default Services;

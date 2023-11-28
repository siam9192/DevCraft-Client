import React from 'react';
import Container from '../../Components/Reuse/Container/Container';
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import './contact.css'
const Contact = () => {
    return (
        <div className='min-h-[calc(100vh-100px)]  contact'>
           <Container>
           <div className='grid lg:grid-cols-2 grid-cols1 py-10'>
                <div className='font-owslad space-y-5'>
           <h1 className='text-6xl text-white '>Contact us</h1>
          <div className='py-10'>
          <div className='flex items-center gap-2'>
           <IoIosCall className='text-5xl text-yellow-500'></IoIosCall>
           <div >
           <h2 className='text-4xl text-white'>Call us</h2>`
            <p className='text-white font-pop'>0184894458998</p>
           </div>
           
           </div>
           <div className='flex items-center gap-2'>
           <IoIosCall className='text-5xl text-yellow-500'></IoIosCall>
           <div >
           <h2 className='text-4xl text-white'>Call us</h2>`
            <p className='text-white font-pop'>0184894458998</p>
           </div>
           
           </div>
           <div className='flex items-center gap-2'>
           <IoIosCall className='text-5xl text-yellow-500'></IoIosCall>
           <div >
           <h2 className='text-4xl text-white'>Call us</h2>`
            <p className='text-white font-pop'>0184894458998</p>
           </div>
           
           </div>
           
          </div>

                </div>
                <div>
                <div className='space-y-4 p-10'>
                    <input type="text" placeholder='Name' className='w-full border-2 rounded-md bg-transparent border-white py-3 px-2 outline-none text-white placeholder:text-white'/>
                    <input type="text" placeholder='Email' className='w-full border-2 rounded-md text-white bg-transparent border-white py-3 px-2 outline-none placeholder:text-white'/>
                    <textarea type="text" placeholder='Message' className='w-full border-2 bg-transparent border-white py-3 px-2 outline-none h-[200px]  resize-none text-white rounded placeholder:text-white'/>
                    <div className='text-center'>
                    <button className='w-full py-2 my-8 bg-pink-600 text-white rounded-full'>Send Message</button>
                </div>
                </div>
               
                </div>

            </div>
           </Container>
        </div>
    );
}

export default Contact;

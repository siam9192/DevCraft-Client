import React from 'react';
import Container from '../../Components/Reuse/Container/Container';
import { IoIosCall } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import './contact.css'
import { Helmet } from 'react-helmet';
const Contact = () => {
    return (
        <div className='min-h-[calc(100vh-100px)] bg-black overflow-hidden '>
                <Helmet>
            <title>DevCraft||Contact</title>
          </Helmet>
           <Container>
           <div className='grid lg:grid-cols-2 grid-cols1 py-10'>
                {/* <div className='font-owslad space-y-5'>
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

                </div> */}
                <div className='space-y-4 p-10 font-pop'>
                    <h1 className='text-6xl text-white font-mono text-center'>Contact us</h1>
                    <div className='space-y-3'>
                     <div className='w-full bg-white p-2 rounded-md flex items-center justify-between'>
                        <div className='p-2 bg-black rounded-md  w-10 h-10 text-center'>
                            <IoIosCall className='text-xl text-yellow-500'></IoIosCall>
                        </div>
                        <h2 className='text-xl text-black'>+9938094970</h2>
                     </div>
                     <div className='w-full bg-white p-2 rounded-md flex items-center justify-between'>
                        <div className='p-2 bg-black rounded-md  w-10 h-10 text-center'>
                            <IoIosMail className='text-xl text-yellow-500'></IoIosMail>
                        </div>
                        <h2 className='text-xl text-black'>devcraft@gmail.com</h2>
                     </div>
                     <div className='w-full bg-white p-2 rounded-md flex items-center justify-between gap-2'>
                        <div className='p-2 bg-black rounded-md  w-10 h-10 text-center'>
                            <FaLocationArrow className='text-xl text-yellow-500'></FaLocationArrow>
                        </div>
                        <h2 className='text-xl text-black'>42 Innovation Lane, Techborough, EN1 2AB, England</h2>
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

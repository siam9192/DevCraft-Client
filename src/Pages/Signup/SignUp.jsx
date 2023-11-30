import React, { useState } from 'react';
import Container from '../../Components/Reuse/Container/Container';
import { Form, Link, useLocation } from 'react-router-dom';
import { FaImage, FaRegImage } from "react-icons/fa6";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import AxiosBase from '../../Hooks/Axios/AxiosBase';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import { updateProfile } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
import { Helmet } from 'react-helmet';
const SignUp = () => {
   const [error,setError] = useState('');
   const [loading,setLoading] = useState(false);
   const [image,setImage] = useState('');
   const {user,logout} = UseAuth()
  const {createUser} = UseAuth();
  const useAxiosBase = AxiosBase();
 
 const handleImage =(e)=>{
 const file = e.target.files[0];
 if(file){
    const imgUrl = URL.createObjectURL(file);
    setImage(imgUrl);
 }
}

const createAccount = async(e)=>{
    e.preventDefault();
    setLoading(true)
    setError('')
    const form = e.target;
    const name = form.name.value;
    const imgFile =  form.photo.files[0];
    const email = form.email.value;
    const role = form.role.value;
    const salary = parseInt(form.salary.value);
    const bankAccount = form.bank_ac.value;
    const password = form.password.value;
    const designation = form.designation.value;
    const terms = form.terms.checked;
    
    if(!image){
        setLoading(false)
        setError('Please add your photo');
        return;
    }
    if(password.length < 6){
        setLoading(false)
        setError('Password must be at least 6 characters');
        
        return;
    }
   
    else if(!/[A-Z]/.test(password)){
        setLoading(false)
    setError('Password must have minimum one Capital letter');
    return;
    }
    else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)){
        setLoading(false)
        setError('Password must have minimum one special characters');
        return;
    }
    else if(!terms){
        setLoading(false)
  setError('Please accept our terms & condition')
    }

    const apiKey = "c9c302a9d5cee64c8eb4dde4d9803027";
 createUser(email,password)
 .then(async current =>{
    console.log('hitting')
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`,{image:imgFile},{
    headers:{
        'content-type':'multipart/form-data'
    }
    
})

if(!response.data.success){
    setLoading(false)
    return;
 }
 const imageUrl = response.data.data.display_url;
  updateProfile(auth.currentUser,{
    displayName: name,photoURL:imageUrl
})
logout()
 const user = {
name,image:imageUrl,role,email,designation,salary,bankAccount,isVerified: false,isFired:false
 }

 const postUser = await useAxiosBase.post('/api/v1/user/new',user);
const result = postUser.data;
if(result.insertedId){
    setLoading(false)
    form.reset()
    setImage('')
    toast.success('Account created successfully!')
}
 })
 

}
    return (
        <div className='bg-gray-200 min-h-[100vh]'>
                <Helmet>
            <title>DevCraft||SIGNUP</title>
          </Helmet>
            <Container>
                <div className='md:flex flex-col justify-center items-center py-2 space-y-4 font-inter'>
                <div className='flex flex-col justify-center items-center'>
        <h1 className='text-blue-600 text-4xl font-oswlad font-semibold'>DevCraftSolutions</h1>
         <p className='text-gray-800 textxl -mt-2 font-inter font-bold'>Employee Management</p>
        </div>
              <Form className='bg-white shadow-2xl p-5 md:w-1/2 space-y-5 rounded-lg text-black' onSubmit={createAccount}>
                <div className='text-center'>
                   {/* <FaImage className='text-8xl text-gray-300'></FaImage> */}
                <div className='flex justify-center flex-col items-center'>
                <img src={`${image ? image :'/images/photo.png'}`} alt="" className='md:w-52 md:h-52
                w-32 h-32 rounded-full'/>
           
                </div>
                   <h2 >Upload your image</h2>
                   <input type="file" name= 'photo'  className='w-full py-2 border-b-2 border-gray-500' onChange={handleImage}/>
                </div>
            <div>
            <p className='text-black font-semibold py-1'>Your name</p>
                <input type="text" name='name' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500' required/>
            </div>
           <div>
           <p className='text-black font-semibold py-1'>Your email</p>
                <input type="email" name='email' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500' required/>
           </div>
            <div>
                <div className='md:flex items-center gap-2'>
                <div className='flex-1'>
                <p className='text-black font-semibold py-1'>Your role</p>
             <select name='role' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500'>
                <option value="employee">Employee</option>
                <option value='hr'>Hr</option>
                <option value='admin'>Admin</option>
               </select>
             </div>
             <div className='flex-1'>
                <p className='text-black font-semibold py-1'>Your designation</p>
                <select name='designation' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500'>
                <option value="Junior Software Engineer">Junior Software Engineer</option>
                <option value='Software Engineer'>Software Engineer</option>
                <option value='Senior Software Engineer'>Senior Software Engineer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Program Manager">Program Manager</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Test Automation Engineer">Test Automation Engineer</option>
                <option value="UX/UI Designer">UX/UI Designer</option>
                <option value="Database Administrator (DBA)">Database Administrator (DBA)</option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Chief Executive Officer (CEO)">Chief Executive Officer (CEO)</option>
                <option value="Chief Information Officer (CIO)">Chief Information Officer (CIO)</option>
               </select>
             </div>
                </div>
            </div>
          <div className='md:flex items-center gap-2'>
            <div className='flex-1'>
            <p className='text-black font-semibold py-1'>Your salary:  (per month)</p>
                <input type="number" name='salary' placeholder='' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500' required/>
            </div>
      <div className='flex-1'><p className='text-black font-semibold py-1'>Your available bank account no: </p>
                <input type="text" name='bank_ac' placeholder='Your bank ac number' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500'required/></div>

          </div>
       <div>
       <p className='text-black font-semibold py-1'>Password</p>
                <input name='password' type="text" placeholder='Password' className='w-full py-2 px-2  border-b-2 outline-none border-gray-500' required/>
       </div>
                <div className='flex items-center gap-2'>
               
    <input type="checkbox" name='terms' class="checkbox checkbox-success" />
    <h3 className='flex items-center gap-2'>I agree  <span className='text-green-600'>terms and conditions</span></h3>
                </div>
                <button type='submit' disabled = {loading} className='py-2 text-center text-white bg-green-600 w-full'>{loading ? <span className="loading loading-spinner loading-sm"></span> : "Create account"}</button>
                {error && <p className='text-red-600'>{error}</p>}
                <p className='text-black'>Already have an account ? <Link to='/login' className='text-green-600 font-semibold'>Login</Link></p>
              </Form>
                </div>
                <Toaster
  position="top-center"
  reverseOrder={false}
/>
            </Container>
        </div>
    );
}

export default SignUp;

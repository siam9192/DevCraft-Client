import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../Components/Reuse/Container/Container';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
const Login = () => {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
  const {login} = UseAuth();
  
  const {state} = useLocation();
  const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res =>{
         if(state){
           navigate(state)
           setLoading(false)
         }
 else{
   navigate('/')
    setLoading(false)
 }
        })
 .catch(err =>{
    setLoading(false)
    console.log(err)
 
 })
}

    return (
        <div className='bg-gray-200 min-h-[100vh]'>
        <Container>
            <div className='md:flex flex-col justify-center items-center py-20 space-y-4 font-inter'>
            <div className='flex flex-col justify-center items-center'>
    <h1 className='text-blue-600 text-4xl font-oswlad font-semibold'>Innovexa Software</h1>
     <p className='text-gray-800 textxl -mt-2 font-inter font-bold'>Employee Management</p>
    </div>
          <form className='bg-white shadow-2xl p-5 md:w-1/3 space-y-5 rounded-lg text-black' onSubmit={handleLogin}>
              
       <div className='px-2'>
       <p className='text-black font-semibold py-1'>Your email</p>
            <input type="text" name='email' className='w-full py-2   border-b-2 outline-none border-gray-500'/>
       </div>
         
      <div className='px-2'>
   <p className='text-black font-semibold py-1'>Password</p>
            <input name='password' type="text" placeholder='Password' className='w-full py-2   border-b-2 outline-none border-gray-500'/>
   </div>
            <div className='flex items-center gap-2'>
           
<input type="checkbox"  class="checkbox checkbox-success" />
<h3 className='flex items-center gap-2'>I agree  <span className='text-green-600'>terms and conditions</span></h3>
            </div>
            <button type='submit' className='py-2 text-center text-white bg-green-600 w-full'>{loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}</button>
            {error && <p className='text-red-600'>{error}</p>}
            <p className='text-black'>Don't have an account ? <Link to='/signup' className='text-green-600 font-semibold'>Sign up</Link></p>
          </form>
            </div>
        </Container>
    </div>
    );
}

export default Login;

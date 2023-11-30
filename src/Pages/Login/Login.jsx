import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../../Components/Reuse/Container/Container';
import UseAuth from '../../Hooks/UserAuth/UseAuth';
import AxiosBase from '../../Hooks/Axios/AxiosBase';
import { Helmet } from 'react-helmet';
const Login = () => {
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
  const {login,logout} = UseAuth();
  
  const {state} = useLocation();
  const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       

        login(email,password)
        .then(async res =>{
        await  AxiosBase().post(`/api/v1/isFired`,{email})
          .then(res =>{
              if(res.data.isFired){
                  logout();
                  setLoading(false)
                  setError("You can't login because you have fired")
                  return;

              }
              if(state){
                navigate(state)
                setLoading(false)
              }
      else{
        navigate('/')
         setLoading(false)
      }
          })
         
        })
 .catch(err =>{
    setLoading(false)
    setError(err.message)
 
 })
 
}

    return (
        <div className='bg-gray-200 min-h-[100vh]'>
          <Helmet>
            <title>DevCraft||Login</title>
          </Helmet>
        <Container>
            <div className='md:flex flex-col justify-center items-center py-20 space-y-4 font-inter md:px-0 px-2'>
            <div className='flex flex-col justify-center items-center'>
    <h1 className='text-blue-600 md:text-4xl text-3xl font-oswlad font-semibold'>DevCraft Solutions</h1>
     <p className='text-gray-800 textxl -mt-2 font-inter font-bold'>Employee Management</p>
    </div>
          <form className='bg-white shadow-2xl p-5 md:w-1/3 space-y-5 rounded-lg px-4 text-black' onSubmit={handleLogin}>
              
       <div className=''>
       <p className='text-black font-semibold py-1'>Your email</p>
            <input type="text" name='email' className='w-full py-2   border-b-2 outline-none border-gray-500' required/>
       </div>
         
      <div className=''>
   <p className='text-black font-semibold py-1'>Password</p>
            <input name='password' type="text" placeholder='Password' className='w-full py-2   border-b-2 outline-none border-gray-500' required/>
   </div>
           
            <button type='submit' disabled = {loading} className='py-2 text-center text-white bg-green-600 w-full'>{loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}</button>
            {error && <p className='text-red-600'>{error}</p>}
            <p className='text-black'>Don't have an account ? <Link to='/signup' className='text-green-600 font-semibold'>Sign up</Link></p>
          </form>
            </div>
        </Container>
    </div>
    );
}

export default Login;

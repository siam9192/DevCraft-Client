import React, { useState } from 'react';
import UseAuth from '../../../Hooks/UserAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../../Hooks/Axios/AxiosSecure';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import auth from '../../../Firebase/Firebase.config';
import { updateEmail, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaS } from 'react-icons/fa6';

const Profile = () => {
    const useAxiosSecure = AxiosSecure();
    const {user} = UseAuth();
    const [image,setImage] = useState('');
    const [loading,setLoading] = useState(false);
    const {data:account,refetch} = useQuery({
        queryKey:['user-ac'],
        queryFn : async ()=>{
           
        const res = await useAxiosSecure.get(`/api/v1/user/info/${user.email}`)
         return res.data
        }
    })
    const handleImage =(e)=>{
        const file = e.target.files[0];
        if(file){
           const imgUrl = URL.createObjectURL(file);
           setImage(imgUrl);
        }
       }
    const updateInfo = (e)=>{
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const imgFile =  form.image.files[0];
        const bankAccount = form.bank_ac.value;
        const phone = form.phone.value

        
        
        if(!imgFile){
            if(name === account.name && email === account.email && bankAccount === account.bankAccount && phone === account.phone){
                console.log(true)
                setLoading(false)
                Swal.fire({
                    title: "Error",
                    text:"Please change something",
                    icon: "error"
                  });
                return;
            }
           
                updateProfile(auth.currentUser, {
                    displayName: name
                   }).then(() => {
                     useAxiosSecure.put('/api/v1/update/user/profile',{id:account._id,name,email,bankAccount,phone})
                     .then(res=>{
                        if(res.data.modifiedCount > 0){
                            refetch()
                            setLoading(false)
                            Swal.fire({
                                title: "Successful",
                                text: "Profile info changed successfuly",
                                icon: "success"
                              });
                           
                        }
                        else{
                            setLoading(false)
                        }
                     })
                   })
        

        }
        else{

                const apiKey = "c9c302a9d5cee64c8eb4dde4d9803027";
                 axios.post(`https://api.imgbb.com/1/upload?key=${apiKey}`,{image:imgFile},{
                    headers:{
                        'content-type':'multipart/form-data'
                    }
                         })
                         .then(response => { 
                           
                         if(!response.data.success){
                            if(!response.data.success){
                                setLoading(false)
                                return;
                             }
                         }
                         const imageUrl = response.data.data.display_url;
                          updateProfile(auth.currentUser,{
                            displayName: name,photoURL:imageUrl
                        })
                        .then(()=>{
                          useAxiosSecure.put('/api/v1/update/user/profile',{id:account._id,name,image:imageUrl,email,bankAccount,phone})
                          .then(res=>{
                            if(res.data.modifiedCount > 0){
                                refetch()
                                setLoading(false)
                                Swal.fire({
                                    title: "Successful",
                                    text: "Profile info changed successfully",
                                    icon: "success"
                                  });
                               
                            }
                            else{
                                setLoading(false)
                            }
                         })
                        
                        })
    }
                         )}
    }

    return (
      <div className='lg:flex justify-center items-center py-10'>
          <div className='p-5 bg-white min-h-[50vh] rounded-md shadow-xl lg:w-1/'>
          <form action="" onSubmit={updateInfo}>
          <div className='lg:flex justify-between items-center'> <img src={image||account?.image} alt="" className='w-32 h-32 rounded-full' />
          <input type="file" name='image' className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={handleImage}/>
          </div>
         
            <div className='pt-5 space-y-3'>
            <div>
            <h4 className='text-black'>Name:</h4>
                <input type="text" name='name' className='w-full p-2 border-2 border-black outline-none' defaultValue={account?.name} />
            </div>
            <div>
            <h4 className='text-black'>Email:</h4>
                <input type="text" name='email' className='w-full p-2 border-2 border-black outline-none' defaultValue={account?.email} readOnly/>
            </div>
            <div>
            <h4 className='text-black'>Phone:</h4>
                <input type="text" name='phone' className='w-full p-2 border-2 border-black outline-none' defaultValue={account?.phone}  />
            </div>
            <div>
            <h4 className='text-black'>Bank ac:</h4>
                <input type="text" name='bank_ac' className='w-full p-2 border-2 border-black outline-none' defaultValue={account?.bankAccount} />
            </div>
            <div className='text-end'>
                <button className='bg-blue-600 px-3 py-2 text-white text-center' disabled= {loading}>{loading ? <span className="loading loading-dots loading-lg"></span> : 'Save changes'}</button>
            </div>
            </div>
            </form>
            </div>
      </div>
    );
}

export default Profile;

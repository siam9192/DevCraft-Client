import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { GiCheckMark } from 'react-icons/gi';
const CardView = ({data,openModal,handelVerified,currentPage,setCurrentPage,pages,prev,next}) => {
    return (
        <div>
           <div className='grid md:grid-cols-3 gap-5'>
           {
                data.users?.map((user,item)=>{
                return  <div className='p-2 bg-white rounded-lg flex gap-2'>
                        <img src={user.image} alt=""  className='w-32 h-32'/>
                        <div className='space-y-1'>
                            <h1 className='text-black flex justify-between'><p>Name: </p><p>{user.name}</p></h1>
                            <h1 className='text-black flex justify-between'><p>Email: </p><p>{user.email}</p></h1>
                            <h1 className='text-black flex justify-between'><p>Verification:</p> <button  onClick={()=> handelVerified(user._id,user.isVerified)}>{user.isVerified ? <GiCheckMark className='text-green-600 text-xl'></GiCheckMark> :<RxCross2 className='text-red-600 text-xl '></RxCross2>}</button></h1>
                            <h1 className='text-black flex justify-between'><p>Salary:</p><p>{user.salary}</p></h1>
                            <h1 className='text-black flex justify-between'><p>Back ac:</p><p>{user.bankAccount}</p></h1>
                           
                            <div className='flex gap-2 items-center'>
                                <button className='px-7 py-2 bg-green-500 text-white' onClick={()=> openModal(user)}>Pay</button><Link to = {`/details/${user.email}`}><button className='px-6 py-2 bg-blue-500 text-white'>Details</button></Link>
                            </div>
                        </div>
                     
                    </div>
                })
            }
           </div>
           <div className='flex justify-center items-center pt-8'>
<div className='flex items-center gap-2 text-white'>
<button onClick={prev}>Prev</button>
{
pages?.map((page,index)=>{
return <button key={index} className={`${currentPage === page ? 'text-red-500' : ''}`} onClick={()=> setCurrentPage(page)}>{page}</button>
})
}
<button onClick={next} >Next</button>
</div>

</div>
        </div>
    );
}

export default CardView;

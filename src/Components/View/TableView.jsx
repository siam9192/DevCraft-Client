import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const TableView = ({data,openModal,handelVerified,currentPage,setCurrentPage,pages,prev,next}) => {
    return (
        <div className="overflow-x-auto shadow-lg rounded-md bg-white ">
        <div className='h-[400px]'>
        <table className="table">
{/* head */}
<thead className='text-black'>
<tr>
  <th>User</th>
  <th>Name</th>
  <th>Email</th>
  <th>Verified</th>
  <th>Bank ac</th>
  <th>Salary</th>
  <th>Action</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
{/* row 1 */}
{
  data.users?.map((user,index)=>{
    return  <tr key={index}>
      <td>
    <div className="flex items-center gap-3">
      <div className="">
        <div className=" ">
          <img src={user.image} alt=" " className='w-10 h-10 rounded-full'/>
        </div>
      </div>
     
    </div>
  </td>
  <td>
      
      <h1 className='text-l'>{user.name}</h1>
         <br/>
    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
  </td>
  <td>{user.email}</td>
  <td> <button  onClick={()=> handelVerified(user._id,user.isVerified)}>{user.isVerified ? <GiCheckMark className='text-green-600 text-xl'></GiCheckMark> :<RxCross2 className='text-red-600 text-xl '></RxCross2>}</button></td>
  <td>{user.bankAccount}</td>
  <td>$ {user.salary} </td>
  <td><button className='w-full bg-green-600 text-white py-2' onClick={()=> openModal(user)}>pay</button></td>
  <td>
  <Link to = {`/details/${user.email}`}><button className="btn btn-ghost btn-xs bg-blue-800 text-white" >details</button></Link>
  </td>
</tr>
  })
}

</tbody>

</table>
        </div>

<div className='flex justify-center items-center'>
<div className='flex items-center gap-2 text-black'>
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

export default TableView;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AxiosSecure from '../../../Hooks/Axios/AxiosSecure';
import Dashboardbar from '../../../Components/Dashboardbar';

const LeaveRequest = () => {
    const useAxiosSecure = AxiosSecure();
    const {data:requests,refetch} = useQuery({
        queryKey:['leave-requests'],
        queryFn:async()=>{
            const res = await useAxiosSecure.get('/api/v1/leaves/request')
            console.log(res.data)
            return res.data;

        }
    })
    const setStatus = (status,id)=>{
        useAxiosSecure.patch('/api/v1/update/status',{
            id,
            status
        })
        .then(res =>{
            if(res.data.modifiedCount>0){
             refetch()
            }
        })
       
    }
    const approve = (id)=>{
        useAxiosSecure.patch('/api/v1/update/status',{
            id,
            status:'approved'
        })
        .then(res =>{
            if(res.data.modifiedCount>0){
             refetch()
            }
        })
    }
 const notApprove = (id)=>{
    useAxiosSecure.patch('/api/v1/update/status',{
        id,
        status:'not approved'
    })
    .then(res =>{
        if(res.data.modifiedCount>0){
         refetch()
        }
    })
   
 }
    return (
        <div>
              <div className="space-y-5">
            <Dashboardbar pathName={'request-requests'} barText={'Request'}></Dashboardbar>
        
       <div className="bg-white p-5 rounded-md shadow-xl min-h-[50vh] overflow-x-auto">
        
       <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr>
        <th>User email</th>
        <th>Apply date</th>
        <th>From</th>
        <th>To</th>
        <th>Status</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
    
     requests?.reverse().map((request,index)=>{
            return <tr key={index}>
                <td>{request.email}</td>
            <td >{request.applyDate}</td>
    <td>{request.from}</td>
    <td>{request.to}</td>
    <td>{ request.isCanceled ? 'Canceled' :request.status}</td>
    {/* <td><button className=" btn px-4 py-2 text-white bg-red-600" disabled = {request.isCanceled || request.status === 'Approved'} onClick={()=>{handleCancel(request._id)}}>Approve</button></td> */}
    <td>
        {/* <select className='w-full py-2  border-2 border-black px-2' onChange={(e)=> setStatus(e.target.value,request._id)}>
    <option disabled = {true}>Select action</option>
        <option>Approve</option>
        <option>Not Approve</option>
        </select> */}
        <button className='btn btn-primary' onClick={()=> approve(request._id)}>Approve</button>

        </td>
        <td>
        <button className='btn px-4 py-2 bg-rose-500 text-white' onClick={()=>{notApprove(request._id)}}>Not Approve</button>
        </td>
            </tr>
        })
    }
    </tbody>
    {/* foot */}
    <tfoot>
    
    </tfoot>
    
  </table>
       </div>
        </div>
        </div>
    );
}

export default LeaveRequest;

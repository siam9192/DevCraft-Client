import { useState } from "react";
import Dashboardbar from "../../Components/Dashboardbar";
import DatePicker from "react-datepicker";
import AxiosSecure from "../../Hooks/Axios/AxiosSecure";
import UseAuth from "../../Hooks/UserAuth/UseAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const Leaves = () => {
    const [startDate,setStartDate] = useState(new Date())
    const [endDate,setEndDate] = useState(new Date())
    const newDate = new Date()
    const useAxiosSecure = AxiosSecure();
    const {user} = UseAuth()
   const {data:leaves,refetch} = useQuery({
    queryKey:['employee-leaves'],
    queryFn:async()=>{
        const res = await useAxiosSecure.get(`/api/v1/leaves/employee/${user?.email}`)
        return res.data
    }
   })
    const handleApply = (e)=>{
        e.preventDefault()
        const apply = {
            name: user.displayName,
            email: user.email,
            applyDate: `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`,
            from:`${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`,
            to:`${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`,
            status:'Pending',
            isCanceled:false
        }
        useAxiosSecure.post('api/v1/leave/apply',apply)
        .then(res=>{
            if(res.data.result === 'found'){
                Swal.fire({
                    title: "Sorry!",
                    text: "Your already in leave",
                    icon: "error"
                  });
            }
            if(res.data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your application on pending wait for our response!",
                    icon: "success"
                  });
                  refetch()
            }
        })
        
    }
  const handleCancel = (id)=>{
   useAxiosSecure.patch('/api/v1/leave/apply/cancel',{id})
   .then(res => {
    if(res.data.modifiedCount > 0){
    refetch();
    
    }
   })
   
    }
    return (
        <div className="space-y-5">
            <Dashboardbar pathName={'Leaves'} barText={'Worksheets'}></Dashboardbar>
            <form action="" className="w-full py-3 px-3 space-y-2 shadow-md bg-white rounded-lg" onSubmit={handleApply}>
            <div className=" grid md:grid-cols-3 grid-cols-2 gap-3  rounded-lg ">
           <div className="flex-1 ">
            <h3 className="py-1">Leave From</h3>
           <DatePicker selected={startDate}  minDate={new Date()}  onChange={(date) => setStartDate(date)} className="w-full py-2  border-2" />
           </div>
           <div className="flex-1 ">
            <h3 className="py-1">Leave To</h3>
           <DatePicker selected={endDate}  minDate={new Date()} onChange={(date) => setEndDate(date)} className="w-full py-2  border-2" />
           </div>
         
           <div className="flex-1 ">
            <h3 className="py-1">Click on </h3>
            <button type="submit" className="w-1/2 py-2 bg-blue-700 text-white ">Apply</button>
           </div>
          </div>
          </form>
       <div className="bg-white p-5 rounded-md shadow-xl">
       <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr>
        <th>Apply date</th>
        <th>From</th>
        <th>To</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        leaves?.reverse().map((leave,index)=>{
            return <tr key={index}>
            <td >{leave.applyDate}</td>
    <td>{leave.from}</td>
    <td>{leave.to}</td>
    <td>{ leave.isCanceled ? 'Canceled' :leave.status}</td>
    <td><button className=" btn px-4 py-2 text-white bg-red-600" disabled = {leave.isCanceled || leave.status === 'Approved' || leave.status === 'Not Approve' || leave.status === 'not approved'} onClick={()=>{handleCancel(leave._id)}}>{leave.isCanceled || leave.status === 'Approved' || leave.status === 'Not Approve' ? 'canceled' : 'cancel'}</button></td>
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
    );
}

export default Leaves;


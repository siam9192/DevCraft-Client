import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AxiosSecure from "../../Hooks/Axios/AxiosSecure";
import UseAuth from "../../Hooks/UserAuth/UseAuth";
import QueryWorksheet from "../../Hooks/Tanstack/QueryWorksheet";

const WorkSheet = () => {
    const [startDate, setStartDate] = useState(new Date())
    const useAxiosSecure = AxiosSecure();
    const {user} = UseAuth();
    const {worksheets,isWorksheetsLoading,worksheetsRefetch} = QueryWorksheet();

    useEffect(()=>{
        worksheetsRefetch()
    },[user])
   

  const submitTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task.value;
    const working_hours = parseInt(form.work_hour.value);
    const date = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`
  const workSheet = {
    name: user.displayName,
    email: user.email,
    task,working_hours,date
  }
 useAxiosSecure.post('/api/v1/worksheet/add',workSheet)
 .then(res => {
   if(res.data.insertedId){
    worksheetsRefetch()
   }
 })
  }

    return (
       <div className='py-5 space-y-5'>
          <div className='flex justify-between items-center shadow-md rounded-md py-6 px-2 mx-3'>
         <div className='flex items-center gap-2'><MdDashboard className='text-3xl text-blue-600'></MdDashboard> <h3 className='text-xl '>Home/Employees</h3></div>
         <h3 className='text-2xl font-semibold'>Work sheet</h3>
          </div>
          {/* <div className='w-full  py-6 px-3 shadow-md rounded-md'>
              <h1 className='text-2xl text-black font- font-semibold '> 7 People found</h1>
          </div> */}

            <form action="" className="w-full py-6 px-3 space-y-2 shadow-md" onSubmit={submitTask}>
                <h1 className="text-xl text-black ">Submit your working task</h1>
          <div className=" flex justify-between gap-3  rounded-md">
           <div className="flex-1">
            <h3>Tasks</h3>
            <select name="task" id="" className="w-full py-2 px-2">
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="content">Content</option>
                <option value="paper-work">Paper work</option>
            </select>
           </div>
           <div className="flex-1">
            <h3>Date</h3>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full py-2  border-2" />
           </div>
           <div className="flex-1">
            <h3>Working hours</h3>
            <input type="number" name="work_hour" id="" placeholder="Worked hours" className="w-full py-2 px-2 rounded border-2  border-black" />
           </div>
           <div className="flex-1">
            
            <button type="submit" className="w-1/2 py-2 bg-blue-700 text-white ">Submit</button>
           </div>
          </div>
          </form>
 
         <div className="bg-white shadow-lg w-full  py-2 px-3 ">
            <div className="grid grid-cols-3 p-5 border-b-2">
            <div>
                <h1 className="text-xl text-black">Task</h1>
            </div>
            <div>
                <h1 className="text-xl text-black">Date</h1>
            </div>
            <div>
                <h1 className="text-xl text-black">Working hours</h1>
            </div>
            
            </div>
             {
                worksheets?.map((worksheet,index)=>{
                   return <div className="grid grid-cols-3 p-3 border-b-2">
                    <div>
                        <h1 className="text- text-black">{worksheet.task}</h1>
                    </div>
                    <div>
                        <h1 className="text-l text-black">{worksheet.date}</h1>
                    </div>
                    <div>
                        <h1 className="text-x text-black ">{worksheet.working_hours}</h1>
                    </div>
                    
                    </div>
                })
             }
         </div>

          </div>
    );
}

export default WorkSheet;

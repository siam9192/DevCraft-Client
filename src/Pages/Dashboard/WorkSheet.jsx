import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AxiosSecure from "../../Hooks/Axios/AxiosSecure";
import UseAuth from "../../Hooks/UserAuth/UseAuth";
import QueryWorksheet from "../../Hooks/Tanstack/QueryWorksheet";
import Dashboardbar from "../../Components/Dashboardbar";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
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
    form.reset()
    worksheetsRefetch();

    toast.success('Successfully added!')
   }
 })
  }

    return (
       <div className='py-5 space-y-3 min-h-[100vh] lg:h-[calc(100vh-100px)] '>
            <Helmet>
            <title>DevCraft||DASHBOARD||WORKSHEETS</title>
          </Helmet>
         <Dashboardbar pathName={'Worksheets'} barText={'Worksheets'}></Dashboardbar>
            <form action="" className="w-full py-3 px-3 space-y-2 shadow-md bg-white rounded-lg" onSubmit={submitTask}>

          <div className=" grid md:grid-cols-4 grid-cols-2 gap-3  rounded-lg ">
           <div className="flex-1">
            <h3 className="py-1">Tasks</h3>
            <select name="task" id="" className="w-full py-2 px-2 border-2">
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="content">Content</option>
                <option value="paper-work">Paper work</option>
            </select>
           </div>
           <div className="flex-1 ">
            <h3 className="py-1">Date</h3>
           <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full py-2  border-2" />
           </div>
           <div className="flex-1">
            <h3 className="py-1">Working hours</h3>
            <input type="number" name="work_hour" id="" placeholder="Worked hours" className="w-full py-2 px-2 rounded border-2  border-black" />
           </div>
           <div className="flex-1 ">
            <h3 className="py-1">Click on </h3>
            <button type="submit" className="w-1/2 py-2 bg-blue-700 text-white ">Submit</button>
           </div>
          </div>
          </form>
         <div className="bg-white shadow-lg w-full h-[300px] md:overflow-y-scroll rounded-lg  py-2 px-3 ">
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
         <Toaster
  position="top-center"
  reverseOrder={false}
/>
          </div>
    );
}

export default WorkSheet;

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { MdDashboard } from 'react-icons/md';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import QueryUsers from '../../Hooks/Tanstack/QueryUsers';
import Dashboardbar from '../../Components/Dashboardbar';
import { Helmet } from 'react-helmet';

const Progress = () => {
    const useAxiosSecure = AxiosSecure();
    const [name,setName] = useState('All');
    // const [worksheets,setWorksheets] = useState([])
    const [employees,setEmployees] = useState([])
    
    const {data:worksheets,isLoading,refetch} = useQuery({
        queryKey:['progress'],
        queryFn:async()=>{
            const res = await useAxiosSecure.get(`/api/v1/worksheets/employees/get?name=${name}`)
            if(name === 'All'){
                const month = new Date().getMonth() + 1;
                const year = new Date().getFullYear();
                console.log(month,year)
                const find = res.data.filter(item => item.date.split('-')[1] == month && item.date.split('-')[0] == year);
                return find;
            }
            return res.data;
        }
    })
  useEffect(()=>{
    useAxiosSecure.get('/api/v1/users')
    .then(res =>{
      setEmployees(res.data)
    })
    refetch()
  },[name])
    return (
        <div className='py-5 space-y-5 px-3 h-full'>
           <Helmet>
            <title>DevCraft||DASHBOARD||PROGRESS</title>
          </Helmet>
           <Dashboardbar pathName={'Progress'} barText={'Progress'}></Dashboardbar>

        <div>

        <div className="overflow-x-auto bg-white p-6 rounded-lg min-h-[200px]">
        <div className='w-full  py-6  rounded-md flex justify-between items-center'>
            <h1 className='text-2xl text-black font- font-semibold '>{worksheets?.length} worksheet found</h1>
            <div className=' items-center gap-2'>
                <h1>Select employee</h1>
                <select name="" id="" className='w-full py-2  p-2 border-2' onChange={(e)=> setName(e.target.value)}>
                    <option value="All"  selected>All</option>
                    {
                        employees?.map((employee,index)=>{
                            return <option value={employee.name} key={index}>{employee.name}</option>
                        })
                    }
                </select>
            </div>
        </div>
  <table className="table table-xs">
    <thead>
      <tr>
        <th>Name</th> 
        <th>Task</th> 
        <th>Working hour</th> 
        <th>Date</th> 
      </tr>
    </thead> 
    <tbody>
     {
        worksheets?.map((worksheet,index)=>{
       return   <tr key={index}>
            <td>{worksheet.name}</td> zzzz
            <td>{worksheet.task}</td> 
            <td>{worksheet.working_hours}</td> 
            <td>{worksheet.date}</td>
          </tr>
        })
     }
      </tbody>
      
  </table>
</div>
        </div>
  </div>
    );
}

export default Progress;

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Container from '../../Components/Reuse/Container/Container';
import Charts from './Charts';
import AxiosSecure from '../../Hooks/Axios/AxiosSecure';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const [employee,setEmployee] = useState({});
  const [salaryHistory,setSalaryHistory] = useState([]);
 const [loading,setLoading] = useState(false);
const useAxiosSecure = AxiosSecure();
const {email} = useParams();

 useEffect(()=>{
  setLoading(true)
  useAxiosSecure.get(`/api/v1/employee/${email}`)
  .then(res => {
    setEmployee(res.data.employee);
    setSalaryHistory(res.data.salaryHistory)
    setLoading(false)
  })
 },[])
 console.log(employee,salaryHistory)
   
   
   if(loading){
    return;
   }
    return (
        <div>
            <Container>
                <div className='w-[80%] shadow-md py-10 font-pop mx-auto'>
                      <div className='grid md:grid-cols-2 gap-5'>
                        <div className='flex justify-center items-center'>
                            <img src={employee.image} alt="" className='w-72 h-72 rounded-full' />
                        </div>
                        <div className='space-y-4'>
                       <div>
                       <h1 className='text-4xl text-black font-semibold '>{employee.name}</h1>
                         <p>(Senior web developer)</p>
                       </div>
                       <div className='space-y-2'>
                        <h2 className='text-black flex items-center gap-2'>Email : <span>{employee.email}</span></h2>
                        <h2 className='text-black flex items-center gap-2'>Phone : <span>N/A</span></h2>
                        <h2 className='text-black flex items-center gap-2'>Age : <span>28</span></h2>
                        <h2 className='text-black flex items-center gap-2'>Address : <span>Mirpur2,dhaka,bangladesh</span></h2>
                        <h2 className='text-black flex items-center gap-2'>Salary(month) : <span>${employee.salary}</span></h2>
                       </div>
                        </div>
                      </div>
                      <Charts salaryHistory = {salaryHistory}></Charts>
    
               </div>
            </Container>
        </div>
    );
}

export default EmployeeDetails;

import React from 'react';

const EmployeesCards = ({users,changeRole}) => {
    
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    users?.map((item,index)=>{
                       return <div className='space-y-2 flex flex-col rounded-md border- border-blue-50' key={index}>
                           <div className='space-y-2 flex-grow'>
                           <img src={item?.image} alt="" className='h-52 w-full p'/>
                            <h1 className='text-2xl text-white'>Name: {item?.name}</h1>
                            <h1 className='text-x text-white'>Designation: {item?.designation}</h1>
                            <h1 className='text-x text-white'>Role: {item?.role}</h1>
                            <h1 className='text-x text-white'>Salary: {item?.salary}</h1>
                           </div>
                            <div className='space-y-2'>
                             <div>{item.role !== 'hr'? <button className='w-full bg-primary text-white py-2' onClick={()=> changeRole(item._id ,'hr')}>Make HR</button> :<button className='w-full bg-white text-black py-2' onClick={()=> changeRole(item._id,'employee')}>Make EMPLOYEE</button>}</div>
                                  <div>{!item.isFired ? <button className='w-full bg-red-500 text-white py-2' onClick={()=> fireEmployee(item.email)}>Fire</button>:<button className='w-full  bg-red-500 text-white py-2' onClick={()=> fireEmployee(item.email)}>Fired</button> }</div>
                            </div>
                          
                        </div>
                    })
                }
            </div>
           
        </div>
    );
}

export default EmployeesCards;

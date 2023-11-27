import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis,Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const DashboardChart = ({salaries}) =>{
    const january  =salaries.filter(salary => salary.month === 'january');
    const february  =salaries.filter(salary => salary.month === 'february');
    const march  =salaries.filter(salary => salary.month === 'march');
    const april  =salaries.filter(salary => salary.month === 'april');
    const  may  =salaries.filter(salary => salary.month === 'may');
    const june  =salaries.filter(salary => salary.month === 'june');
    const july  =salaries.filter(salary => salary.month === 'july');
    const august  =salaries.filter(salary => salary.month === 'august');
    const september  =salaries.filter(salary => salary.month === 'september');
    const october  =salaries.filter(salary => salary.month === 'october');
    const november  =salaries.filter(salary => salary.month === 'november');
    const december  =salaries.filter(salary => salary.month === 'december');
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const colors = ['#0088FE', '#00C49F','#eb5200', '#FFBB28', '#FF8042', 'red', 'pink','#34eb77','#e8eb34','#34ebae','#ba34eb','#eb3452'];
    const concatAmount = (array)=>{
        const sum = array.reduce((previousValue,currentValue)=> previousValue + currentValue.amount ,0 )
        return sum;
    }
    
  const data = [
    {
      month:"jan",
      salary: concatAmount(january)
    },
    {
      month:"feb",
      salary: concatAmount(february),

    },
    {
      month:"mar",
      salary: concatAmount(march)
    },
    {
      month: "apr",
      salary: concatAmount(april)
    },
    {
      month:"may",
      salary: concatAmount(may)
    },
    {
      month:"jun",
      salary: concatAmount(june)
    },
    {
      month:"jul",
      salary: concatAmount(july)
    },
    {
      month:"aug",
      salary: concatAmount(august)
    },
    {
      month:"sep",
      salary: concatAmount(september)
    },
    {
      month:"oct",
      salary: concatAmount(october)
    },
    {
      month:"nov",
      salary: concatAmount(november)
    },
    {
      month:"dec",
      salary: concatAmount(december)
    }

  ]
  console.log(data)
  console.log(concatAmount(december))
    return (
      <>
      <ResponsiveContainer width="100%" height={250}>
<BarChart height={250} data={data} >
            <XAxis dataKey={'month'}></XAxis>
            <YAxis dataKey={'salary'}></YAxis>
           <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar> 
        </BarChart>
</ResponsiveContainer>
      </>
    );
  }



export default DashboardChart;

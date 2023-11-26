import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis,Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';

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

    const colors = ['#0088FE', '#00C49F','#eb5200', '#FFBB28', '#FF8042', 'red', 'pink','#34eb77','#e8eb34','#34ebae','#ba34eb','#eb3452'];
    const concatAmount = (array)=>{
        const sum = array.reduce((previousValue,currentValue)=> previousValue + currentValue.amount ,0 )
        return sum;
    }
    
  const data = [
    {
      month:"january",
      salary: concatAmount(january)
    },
    {
      month:"february",
      salary: concatAmount(february),

    },
    {
      month:"march",
      salary: concatAmount(march)
    },
    {
      month: "april",
      salary: concatAmount(april)
    },
    {
      month:"may",
      salary: concatAmount(may)
    },
    {
      month:"june",
      salary: concatAmount(june)
    },
    {
      month:"july",
      salary: concatAmount(july)
    },
    {
      month:"august",
      salary: concatAmount(august)
    },
    {
      month:"september",
      salary: concatAmount(september)
    },
    {
      month:"october",
      salary: concatAmount(october)
    },
    {
      month:"november",
      salary: concatAmount(november)
    },
    {
      month:"december",
      salary: concatAmount(december)
    }

  ]
  console.log(data)
  console.log(concatAmount(december))
    return (
      <>
       <div className=''>
       {/* <ResponsiveContainer> */}
          <PieChart  width={600} height={400}>
            <Pie dataKey="salary" data={data} fill="#8884d8" label >   {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} cx="50%"
          cy="50%"
          labelLine={false}
        
          outerRadius={80}
         />
            ))} </Pie>

          </PieChart>
        {/* </ResponsiveContainer> */}
           {/* <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>  */}
        {/* </BarChart> */}

       </div>
      </>
    );
  }



export default DashboardChart;

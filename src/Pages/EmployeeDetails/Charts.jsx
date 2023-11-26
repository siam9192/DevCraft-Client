import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis,Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const Charts = ({salaryHistory}) =>{
    const january  = salaryHistory.find(salary => salary.month === 'january');
    const february  = salaryHistory.find(salary => salary.month === 'february');
    const march  = salaryHistory.find(salary => salary.month === 'march');
    const april  = salaryHistory.find(salary => salary.month === 'april');
    const  may  = salaryHistory.find(salary => salary.month === 'may');
    const june  = salaryHistory.find(salary => salary.month === 'june');
    const july  = salaryHistory.find(salary => salary.month === 'july');
    const august  = salaryHistory.find(salary => salary.month === 'august');
    const september  = salaryHistory.find(salary => salary.month === 'september');
    const october  = salaryHistory.find(salary => salary.month === 'october');
    const november  = salaryHistory.find(salary => salary.month === 'november');
    const december  = salaryHistory.find(salary => salary.month === 'december');

    const colors = ['#0088FE', '#00C49F','#eb5200', '#FFBB28', '#FF8042', 'red', 'pink','#34eb77','#e8eb34','#34ebae','#ba34eb','#eb3452'];

  const data = [
    {
      month:"january",
      salary: january ? january.amount: 0,
    },
    {
      month:"february",
      salary: february ? february.amount : 0,

    },
    {
      month:"march",
      salary: march ? march.amount : 0
    },
    {
      month: "april",
      salary: april ? april.amount : 0
    },
    {
      month:"may",
      salary: may ? may.amount : 0
    },
    {
      month:"june",
      salary: june ? june.amount : 0
    },
    {
      month:"july",
      salary: july ? july.amount : 0
    },
    {
      month:"august",
      salary: august ? august.amount : 0
    },
    {
      month:"september",
      salary: september ? september.amount : 0
    },
    {
      month:"october",
      salary: october ? october.amount : 0
    },
    {
      month:"november",
      salary: november ? november.amount : 0
    },
    {
      month:"december",
      salary: december ? december.amount : 0
    }

  ]
  console.log(data)
    return (
      <>
    
        <BarChart width={700} height={400} data={data} >
            <XAxis dataKey={'month'}></XAxis>
            <YAxis dataKey={'salary'}></YAxis>
          {/* <Bar dataKey="uv" fill="#8884d8" /> */}
          {/* <Bar dataKey="salary" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
           <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar> 
        </BarChart>

      </>
    );
  }

export default Charts
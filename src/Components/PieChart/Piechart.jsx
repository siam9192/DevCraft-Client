import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Piechart = ({salaries}) => {
    const january  = salaries.find(salary => salary.month === 'january');
    const february  = salaries.find(salary => salary.month === 'february');
    const march  = salaries.find(salary => salary.month === 'march');
    const april  = salaries.find(salary => salary.month === 'april');
    const  may  = salaries.find(salary => salary.month === 'may');
    const june  = salaries.find(salary => salary.month === 'june');
    const july  = salaries.find(salary => salary.month === 'july');
    const august  = salaries.find(salary => salary.month === 'august');
    const september  = salaries.find(salary => salary.month === 'september');
    const october  = salaries.find(salary => salary.month === 'october');
    const november  = salaries.find(salary => salary.month === 'november');
    const december  = salaries.find(salary => salary.month === 'december');

    const COLORS = ['#0088FE', '#00C49F','#eb5200', '#FFBB28', '#FF8042', 'red', 'pink','#34eb77','#e8eb34','#34ebae','#ba34eb','#eb3452'];

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
    return (
        <div>
             <PieChart width={300} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="salary"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="salary"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
        </div>
    );
}

export default Piechart;

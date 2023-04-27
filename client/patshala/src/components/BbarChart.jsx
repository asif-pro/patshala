import React from 'react'
import { PieChart, 
        Pie, 
        Tooltip,
        BarChart,
        CartesianGrid,
        XAxis,
        YAxis,
        Bar,
        Legend




} from 'recharts'

const BbarChart = ({chrtdata}) => {
// console.log(chrtdata)
    const data = [
        {name:"Se:A", TeamWork: 5, Curiosity: 7, Creativity: 9, Leadership: 6},
        {name:"Se:B", TeamWork: 9, Curiosity: 6, Creativity: 8, Leadership: 7},
        {name:"Se:C", TeamWork: 4, Curiosity: 9, Creativity: 7, Leadership: 8},
        {name:"Se:D", TeamWork: 8, Curiosity: 8, Creativity: 6, Leadership: 9},
        {name:"Se:E", TeamWork: 6, Curiosity: 9, Creativity: 5, Leadership: 7},
        {name:"Se:F", TeamWork: 10, Curiosity: 6, Creativity: 8, Leadership: 6},
    ]
    // const data = chrtdata

  return (
    <>
        
        {/* <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart> */}
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TeamWork" fill="#8884d8" />
          <Bar dataKey="Curiosity" fill="#82ca9d" />
          <Bar dataKey="Creativity" fill="#f542ad" />
          <Bar dataKey="Leadership" fill="#f26e0a" />
        </BarChart>
    </>
    
  )
}

export default BbarChart
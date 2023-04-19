import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";


const PieChart = ({chartData}) => {

//   const [chartData, setChartData] = useState({
//     labels: Data.map((data) => data.year), 
//     datasets: [
//       {
//         label: "Users Gained ",
//         data: Data.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0"
//         ],
//         borderColor: "black",
//         borderWidth: 2
//       }
//     ]
//   });
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Assignmnet Score</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}

export default PieChart
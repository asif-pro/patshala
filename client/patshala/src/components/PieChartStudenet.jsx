import React from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

const PieChartStudenet = () => {

    const Data = [
        // {
        //   January: 1,
        //   February:8,
        //   March: 80000,
        //   April: 823,
        //   May: 823,
        //   June: 823,
        //   July: 823
        //   },
          {
            id: 2,
            year: 'Math',
            userGain: 45677,
            userLost: 345
          },
          {
            id: 3,
            year:'Science',
            userGain: 78888,
            userLost: 555
          },
          {
            id: 4,
            year:'Language',
            userGain: 90000,
            userLost: 4555
          },
          {
            id: 4,
            year:'Art',
            userGain: 90000,
            userLost: 4555
          },
          {
            id: 4,
            year:'History',
            userGain: 90000,
            userLost: 4555
          },
          {
            id: 5,
            year: 'Music',
            userGain: 43500,
            userLost: 234
          }
        ];
  
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#30b834",
          "#ab1bb5"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Assignmnet Score By Subject</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export default PieChartStudenet
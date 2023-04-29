import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Music',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Language',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Science',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Art',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


const RdarChart = () => {
  return (
    <>  <h2 className='subjectScoreHeading'>Soft Skills</h2>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 160]} />
          <Radar name="Subjects" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Soft-Skills" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  )
}

export default RdarChart
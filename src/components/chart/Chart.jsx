import React from 'react'
import './Chart.css'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey='Month' stroke='#5550bd' />
          <YAxis />
          <Area
            type='monotone'
            dataKey={dataKey}
<<<<<<< HEAD
            stroke='#00ADB5'
            fill='#00ADB5'
=======
            stroke='yellow'
            fill='yellow'
>>>>>>> ddb12f7 (commit by dharu boi)
          />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray='5 5' />}
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

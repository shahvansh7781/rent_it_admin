import React from 'react'
import './Home.css'

import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'

import { chartData } from '../../data'

import WidgetLg from '../../components/widgetLg/widgetLg'
import WidgetSm from '../../components/widgetSm/widgetSm'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={chartData} title='Sales Analytics' grid dataKey='Sales' />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

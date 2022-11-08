import React from 'react'
import './FeaturedInfo.css'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Total Cars</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,415</span>

        </div>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Total Bookings</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$,4150</span>
         
        </div>

      
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Total Users</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,225</span>
          
        </div>

       
      </div>
    </div>
  )
}

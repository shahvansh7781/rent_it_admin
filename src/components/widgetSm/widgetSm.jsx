import React from 'react'
import './widgetSm.css'

import VisibilityIcon from '@mui/icons-material/Visibility'
import { WSmData } from '../../wsmData'
import { Link } from 'react-router-dom'

export default function widgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {WSmData.map((wsmd) => {
          return (
            <li className='widgetSmListItem'>
              <img src={wsmd.img} alt='' className='widgetSmImg' />
              <div className='widgetSmUser'>
                <span className='widgetSmUsername'>{wsmd.uName}</span>
                <span className='widgetSmUserJobtitle'>{wsmd.Job}</span>
              </div>

              <Link to={'/user/' + wsmd.id} className='link'>
                <button className='widgetSmButton'>
                  <VisibilityIcon className='wigetSmIcon' />
                  Display
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

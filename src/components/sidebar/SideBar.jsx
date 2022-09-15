import React, { useState } from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GroupIcon from '@mui/icons-material/Group'
import CarRentalIcon from '@mui/icons-material/CarRental'
import FeedbackIcon from '@mui/icons-material/Feedback'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

export default function SideBar() {
  const [currentLink, setCurrentLink] = useState(1)

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>DashBoard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li
                onClick={() => {
                  setCurrentLink(1)
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                    /* you can also use 'auto' behaviour
         in place of 'smooth' */
                  })
                }}
                className={
                  currentLink === 1
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <LineStyleIcon className='sidebarIcon' />
                Home
              </li>
            </Link>

            <Link to='/' className='link'>
              <li
                onClick={() => {
                  setCurrentLink(2)
                  window.scrollTo({
                    top: 150,
                    behavior: 'smooth',
                    /* you can also use 'auto' behaviour
         in place of 'smooth' */
                  })
                }}
                className={
                  currentLink === 2
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <TimelineIcon className='sidebarIcon' />
                Analytics
              </li>
            </Link>

            <Link to='/' className='link'>
              <li
                onClick={() => {
                  setCurrentLink(3)
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                    /* you can also use 'auto' behaviour
         in place of 'smooth' */
                  })
                }}
                className={
                  currentLink === 3
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <TrendingUpIcon className='sidebarIcon' />
                Sales
              </li>
            </Link>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li
                onClick={() => setCurrentLink(4)}
                className={
                  currentLink === 4
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <GroupIcon className='sidebarIcon' />
                Users
              </li>
            </Link>

            <Link to='/cars' className='link'>
              <li
                onClick={() => setCurrentLink(5)}
                className={
                  currentLink === 5
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <CarRentalIcon className='sidebarIcon' />
                Cars
              </li>
            </Link>

            <Link to='/' className='link'>
              <li
                onClick={() => {
                  setCurrentLink(6)
                  window.scrollTo({
                    top: 600,
                    behavior: 'smooth',
                    /* you can also use 'auto' behaviour
         in place of 'smooth' */
                  })
                }}
                className={
                  currentLink === 6
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <AttachMoneyIcon className='sidebarIcon' />
                Transactions
              </li>
            </Link>

            <Link to='/feedbacks' className='link'>
              <li
                onClick={() => setCurrentLink(7)}
                className={
                  currentLink === 7
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
              >
                <FeedbackIcon className='sidebarIcon' />
                Feedback
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

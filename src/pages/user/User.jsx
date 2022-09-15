import React from 'react'
import './User.css'

import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { EmailOutlined } from '@mui/icons-material'

export default function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://s.yimg.com/fz/api/res/1.2/cNVerJHd13sqqx_mSlfQSQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/4cb8a5ec-d715-324f-9cee-731a1dcde6b9/t_500x300'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Alia Bhatt</span>
              <span className='userShowUserTitle'>Actoress</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>

            <div className='userShowInfo'>
              <PermIdentityIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>rushit2002</span>
            </div>

            <div className='userShowInfo'>
              <CalendarTodayIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>10-09-2002</span>
            </div>

            <div className='userShowInfo'>
              <PhoneAndroidIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>+91 8320002605</span>
            </div>

            <div className='userShowInfo'>
              <EmailOutlined className='userShowIcon' />
              <span className='userShowInfoTitle'>rp@gmail.com</span>
            </div>

            <div className='userShowInfo'>
              <LocationSearchingIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>Gujarat | India</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          
        </div>
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import './Topbar.css'
import { DarkModeContext } from '../../context/context'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

export default function Topbar() {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='topbar'>
      <div className='topbarwrapper'>
        <div className='topLeft'>
          <span className='logo'>RentIt</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'></div>
          {/* <div>
            <SettingsBrightnessIcon
              className='toggle'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div> */}
          <img
            src='https://s.yimg.com/fz/api/res/1.2/nTYpQYfze6U7TH8cmKWgdg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MTg4/https://s.yimg.com/zb/imgv1/28874a3a-c58b-3fea-8601-3b151eaf2634/t_500x300'
            alt=''
            className='topAvatar'
          ></img>
        </div>
      </div>
    </div>
  )
}

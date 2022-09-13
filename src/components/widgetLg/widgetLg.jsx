import React from 'react'
import './widgetLg.css'

import { WLgData } from '../../wlgData'

export default function widgetLg() {
  const Button = ({ type }) => {
    return <button className={'widgetLgBtn  ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>

        {WLgData.map((wlgd) => {
          return (
            <tr className='widgetLgTr'>
              <td className='widgetLgUser'>
                <img className='widgetLgImg' src={wlgd.img} alt=''></img>
                <span className='widgetLgName'>{wlgd.uName}</span>
              </td>
              <td className='widgetLgDate'>{wlgd.date}</td>
              <td className='widgetLgAmount'>{wlgd.amount}</td>
              <td className='widgetLgStatus'>
                <Button type={wlgd.status} />
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

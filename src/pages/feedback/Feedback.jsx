import React, { useState } from 'react'
import './Feedback.css'

import { DataGrid } from '@mui/x-data-grid'
import { feedbackRows } from '../../data'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export default function Feedback() {
  const [data, setData] = useState(feedbackRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'avtar',
      headerName: 'Profile',
      width: 100,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avtar} alt='' />
          </div>
        )
      },
    },
    {
      field: 'username',
      headerName: 'User',
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className='userListUser'>
      //       <img className='userListImg' src={params.row.avtar} alt='' />
      //       {params.row.username}{' '}
      //     </div>
      //   )
      // },
    },
    { field: 'email', headerName: 'Email-ID', width: 130 },
    {
      field: 'status',
      headerName: 'Status',

      width: 90,
    },
    {
      field: 'date',
      headerName: 'Date',

      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/feedback/' + params.row.id}>
              <button className='userListEdit'>View</button>
            </Link>

            <DeleteOutlineIcon
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='feedback'>
      <DataGrid
        style={{ color: 'darkorange' }}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

import React, { useState } from 'react'
import './UserList.css'

import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../../data'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Search } from '@mui/icons-material'

export default function UserList() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  // const array = []

  // const newData = array.concat(search(data))

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
      headerName: 'UserName',
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
      field: 'transaction',
      headerName: 'Transactions',

      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
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

  const [query, setQuery] = useState('')

  const keys = ['User', 'Email-ID']

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key](query)))
  }

  return (
    <div className='userList'>
      {/* <div className='search'>
        <div className='searchRight'>
          <input
            type='text'
            placeholder='Search...'
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <div className='searchLeft'>
          <Search className='searchIcon' />
        </div>
      </div> */}
      {/* console.log(Search(data)) */}
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

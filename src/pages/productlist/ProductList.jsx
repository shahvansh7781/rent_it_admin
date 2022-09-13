import React, { useState } from 'react'
import './ProductList.css'

import { DataGrid } from '@mui/x-data-grid'
import { productRows } from '../../data'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'

export default function ProductList() {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.img} alt='' />
          </div>
        )
      },
    },
    {
      field: 'name',
      headerName: 'Car',
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    { field: 'number', headerName: 'Number', width: 130 },
    {
      field: 'status',
      headerName: 'Status',

      width: 90,
    },
    {
      field: 'rent',
      headerName: 'Rent',

      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>

            <DeleteOutlineIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className='productList'>
      <div className='createProduct'>
        <Link to='/newproduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <DataGrid
        style={{ color: 'darkorange', height: '95vh' }}
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

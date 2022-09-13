import React from 'react'
import './Product.css'

import Chart from '../../components/chart/Chart'
import { productData } from '../../data'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Routes,
} from 'react-router-dom'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Car</h1>
      </div>

      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={productData}
            dataKey='Sales'
            title='Sales Performance'
            grid
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://tse4.mm.bing.net/th?id=OIP.kdNjCeAk4JGZGc4KBsQpLQHaEK&pid=Api&P=0'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Tata Nexon</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Rides:</span>
              <span className='productInfoValue'>4321</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>In stocks:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Car Name</label>
            <input type='text' placeholder='Tata Nexon' />
            <label>Stock</label>
            <input type='text' placeholder='123' />
            <label>Available</label>
            <select name='inStock' id='inStock' className='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://tse4.mm.bing.net/th?id=OIP.kdNjCeAk4JGZGc4KBsQpLQHaEK&pid=Api&P=0'
                alt=''
                className='productUploadImg'
              ></img>
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }}></input>
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

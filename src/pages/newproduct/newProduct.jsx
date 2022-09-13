import React from 'react'
import './newProduct.css'

import emailjs from '@emailjs/browser'

export default function newProduct() {
  return (
    <div className='newproduct'>
      <h1 className='addProductTitle'>New Product</h1>
      <form className='addProductForm'>
        <div className='addProductItem'>
          <label>Image</label>
          <input type='file' id='file' name='file' />
        </div>
        <div className='addProductItem'>
          <label>Name</label>
          <input type='text' placeholder='Apple Airpods' name='name' />
        </div>
        <div className='addProductItem'>
          <label>Stock</label>
          <input type='text' placeholder='123' name='stock' />
        </div>
        <div className='addProductItem'>
          <label>Available</label>
          <select name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <button type='submit' className='addProductButton'>
          Create
        </button>
      </form>
    </div>
  )
}

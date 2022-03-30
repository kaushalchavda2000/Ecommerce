import React from 'react'

import "./category.scss"

const Category = () => {
  return (
    <div className='category py-1 px-4  border'>
      <i className='icon fa-solid fa-circle-user p-1 border'></i>
      <span className='category_name border p-1'>clothes</span>
    </div>
  )
}

export default Category;

import React from 'react'
import productsData from '../../Data/Products'
import Products from '../Products/Products'
const Menu = () => {
  return (
    <div>
      {/* 
      display: flex;
    flex-wrap: wrap; */}
      {productsData.map(({ id, ...otherprops }) => (
        <Products key={id} {...otherprops} />
      ))}
    </div>
  )
}

export default Menu

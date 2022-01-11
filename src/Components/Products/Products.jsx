import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
// import ProductCard from '../ProductCard/ProductCard'
import { AllProducts } from './Products.styles'
const Products = ({ title, items }) => {
  return (
    <div>
      <h1>{title}</h1>
      <AllProducts>
        {items.map((el, idx) => (
          <MenuItems key={idx} el={el} />
        ))}
      </AllProducts>
    </div>
  )
}

export default Products

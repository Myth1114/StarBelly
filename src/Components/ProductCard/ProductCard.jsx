import React from 'react'

import { Card, Image, Text, Name, Price } from './ProductsCard.styles'

//animation

const ProductCard = ({ el }) => {
  return (
    <Card>
      <Image src={el.imgSrc} alt={el.name}></Image>
      <Text>
        <Name>{el.name}</Name>
        <Price>Rs.{el.price}</Price>
      </Text>
    </Card>
  )
}

export default ProductCard

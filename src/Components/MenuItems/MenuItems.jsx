import React from 'react'
import { RecipeCard, Aside, Article, Img } from './MenuItems.styles'
import { Text, Name, Price } from '../ProductCard/ProductsCard.styles'
const MenuItems = ({ el }) => {
  return (
    <RecipeCard>
      <Aside>
        <Img src={el.imgSrc} alt='qq' />
      </Aside>
      <Article>
        <Text>
          <Name>{el.name}</Name>
          <Price>${el.price}</Price>
        </Text>
        {/* <Paragraph classname='description'>qwerty</Paragraph> */}
      </Article>
    </RecipeCard>
  )
}

export default MenuItems

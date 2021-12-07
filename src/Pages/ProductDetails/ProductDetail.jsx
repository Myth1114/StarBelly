import React from 'react'
import {
  SectionContainer,
  Container,
  ContainerLeft,
  Image,
  ContainerRight,
  ItemDetails,
  Product,
  Name,
  Price,
  Description,
  Rating,
} from './product.styles'
import { Button2 } from '../../Components/GlobalStyles/globalstyles'
import { Star } from '@material-ui/icons'
const ProductDetail = () => {
  return (
    <SectionContainer>
      <Container>
        <ContainerLeft>
          <Image>
            <img src='/images/top-4.jpg' alt='qwe'></img>
          </Image>
        </ContainerLeft>
        <ContainerRight>
          <ItemDetails>
            <Product>
              <Name>Saumon Gravlax</Name>
              <Price>$200</Price>
            </Product>
            <Rating>
              <Star />
              <Star />
              <Star />
              <Star />
              (4 ratings)
            </Rating>
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              earum asperiores dicta beatae voluptatibus. Nesciunt facilis sint
              minima eveniet quas sit officiis repellendus suscipit obcaecati?
              Magni veniam ex minus odio.
            </Description>
            <Button2>Add to Cart</Button2>
          </ItemDetails>
        </ContainerRight>
      </Container>
    </SectionContainer>
  )
}

export default ProductDetail

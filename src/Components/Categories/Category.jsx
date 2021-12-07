import React, { useRef } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {
  SectionContainer,
  Container,
  Categories,
  Text,
  Image,
  Img,
} from '../Categories/category.style'
import {
  Heading,
  PrimaryHeading,
  Arrow,
  PrevArrow,
  NextArrow,
} from '../GlobalStyles/globalstyles'
import { Link } from 'react-router-dom'
const Category = () => {
  const scrollingNode = useRef(null)
  const scroll = (scrollOffset) => {
    scrollingNode.current.scrollLeft += scrollOffset
  }
  return (
    <SectionContainer>
      <Heading>
        <PrimaryHeading>Categories</PrimaryHeading>
        <Arrow>
          <PrevArrow>
            <ArrowBackIosIcon
              style={{ marginLeft: '7px' }}
              onClick={() => scroll(-300)}
            />
          </PrevArrow>
          <NextArrow>
            <ArrowForwardIosIcon onClick={() => scroll(300)} />
          </NextArrow>
        </Arrow>
      </Heading>
      <Container ref={scrollingNode}>
        <Categories>
          <Image>
            <Link to='/productDetail'>
              <Img src='/Images/hero-4.png' alt='asdf'></Img>
            </Link>
          </Image>
          <Text>Pizza</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-2.png' alt='asdf'></Img>
          </Image>
          <Text>Popcorn</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-5.png' alt='asdf'></Img>
          </Image>
          <Text>Lollipop</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-6.png' alt='asdf'></Img>
          </Image>
          <Text>Desserts</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-7.png' alt='asdf'></Img>
          </Image>
          <Text>Burger</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-8.png' alt='asdf'></Img>
          </Image>
          <Text>Burger</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-8.png' alt='asdf'></Img>
          </Image>
          <Text>Burger</Text>
        </Categories>
        <Categories>
          <Image>
            <Img src='/Images/hero-8.png' alt='asdf'></Img>
          </Image>
          <Text>Burger</Text>
        </Categories>
      </Container>
    </SectionContainer>
  )
}

export default Category

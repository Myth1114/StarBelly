import React, { useRef } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {
  SectionTopProducts,
  TopProduct,
  Card,
  Image,
  Text,
  Name,
  Price,
} from './topproducts.styles'
import {
  PrimaryHeading,
  Heading,
  Arrow,
  PrevArrow,
  NextArrow,
} from '../GlobalStyles/globalstyles'
const TopProducts = () => {
  const scrollingNode = useRef(null)
  const scroll = (scrollOffset) => {
    scrollingNode.current.scrollLeft += scrollOffset
  }
  return (
    <SectionTopProducts className='section__topProducts'>
      <Heading>
        <PrimaryHeading>Top Dishes</PrimaryHeading>
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
      <TopProduct ref={scrollingNode}>
        <Card>
          {/* <div className='offer'>Rs.100</div> */}
          <Image src='/Images/top-1.jpg' alt='aaa'></Image>
          <Text>
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
        <Card>
          {/* <div className='offer'>Rs.100</div> */}
          <Image src='/Images/top-1.jpg' alt='aaa'></Image>
          <Text>
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
        <Card>
          <Image src='Images/top-2.jpg' alt='aaa'></Image>
          <Text>
            {' '}
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
        <Card>
          {/* <div className='offer'>Rs.100</div> */}
          <Image src='Images/top-3.jpg' alt='aaa'></Image>
          <Text>
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
        <Card>
          {/* <div className='offer'>Rs.100</div> */}
          <Image src='Images/top-4.jpg' alt='aaa'></Image>
          <Text>
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
        <Card>
          <Image src='Images/top-5.jpg' alt='aaa'></Image>
          <Text>
            <Name>Dry Fruits,Nuts & Seeds</Name>
            <Price>Rs.500</Price>
          </Text>
        </Card>
      </TopProduct>
    </SectionTopProducts>
  )
}

export default TopProducts

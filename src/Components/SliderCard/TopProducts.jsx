import React, { useRef } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ProductCard from '../ProductCard/ProductCard'
import { TopProductsData } from '../../Data/Data'
import {
  SectionTopProducts,
  TopProduct,
} from './topproducts.styles.jsx'
import {
  PrimaryHeading,
  Heading,
  Arrow,
  PrevArrow,
  NextArrow,
} from '../GlobalStyles/globalstyles'

//animation
import { useScroll } from '../../UseScroll/UseScroll'
import { TopProductsAnimation } from '../Animate/Animate'

const TopProducts = () => {
  const scrollingNode = useRef(null)
  const scroll = (scrollOffset) => {
    scrollingNode.current.scrollLeft += scrollOffset
  }

  const [element, controls] = useScroll()
  return (
    <SectionTopProducts className='section__topProducts' ref={element}>
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
      <TopProduct
        variants={TopProductsAnimation}
        initial='hidden'
        final='show'
        animate={controls}
        ref={scrollingNode}
      >
        {TopProductsData.map((el) => {
          return <ProductCard key={el.id} el={el} />
        })}
      </TopProduct>
    </SectionTopProducts>
  )
}

export default TopProducts

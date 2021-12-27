import React, { useRef } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {
  Heading,
  PrimaryHeading,
  Arrow,
  PrevArrow,
  NextArrow,
} from '../../Components/GlobalStyles/globalstyles'
import {
  MainContainer,
  ReviewSection,
  Box,
  Title,
  Ratings,
  Paragraph,
} from './Review.styles'
const Review = () => {
  const scrollingNode = useRef(null)
  const scroll = (scrollOffset) => {
    scrollingNode.current.scrollLeft += scrollOffset
  }
  return (
    <MainContainer>
      <Heading>
        <PrimaryHeading>Review about us</PrimaryHeading>
        <Arrow>
          <PrevArrow>
            <ArrowBackIosIcon
              style={{ marginLeft: '7px' }}
              onClick={() => scroll(-600)}
            />
          </PrevArrow>
          <NextArrow>
            <ArrowForwardIosIcon onClick={() => scroll(600)} />
          </NextArrow>
        </Arrow>
      </Heading>
      <ReviewSection ref={scrollingNode}>
        <Box>
          <Title>Very tasty</Title>
          <Ratings>*****</Ratings>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nostrum saepe corrupti architecto eligendi aspernatur odit possimus
            explicabo inventore ut quibusdam dolores animi quidem minus quaerat,
            rerum est aperiam unde.
          </Paragraph>
        </Box>
        <Box>
          <Title>I have lunch here everyday</Title>
          <Ratings>****</Ratings>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
            quaerat. Placeat itaque quasi corrupti quam modi, neque nihil odio
            sed sequi deserunt fuga accusamus ex aspernatur quod molestiae
            aliquid! Maxime.
          </Paragraph>
        </Box>
        <Box>
          <Title>Great Service</Title>
          <Ratings>*****</Ratings>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            amet, esse quod culpa cumque quis temporibus, sequi reiciendis nam
            omnis, iure beatae unde nostrum cum. Deserunt ullam asperiores alias
            aperiam!
          </Paragraph>
        </Box>
        <Box>
          <Title>Great Service</Title>
          <Ratings>*****</Ratings>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            amet, esse quod culpa cumque quis temporibus, sequi reiciendis nam
            omnis, iure beatae unde nostrum cum. Deserunt ullam asperiores alias
            aperiam!
          </Paragraph>
        </Box>
      </ReviewSection>
    </MainContainer>
  )
}

export default Review

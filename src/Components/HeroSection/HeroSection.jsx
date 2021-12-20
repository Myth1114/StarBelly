import React from 'react'

import { useScroll } from '../../UseScroll/UseScroll'
import {
  HeroSections,
  HeroLeft,
  HeroRight,
  Images,
  Image1,
  Image2,
  Image3,
  Text,
} from './herosection.styles'
import { Button2 } from '../GlobalStyles/globalstyles'

///anmations
import { HeroSectionAnimation } from '../Animate/Animate'
const HeroSection = () => {
  const [element, controls] = useScroll()
  return (
    <section>
      <HeroSections ref={element}>
        <HeroLeft
          variants={HeroSectionAnimation}
          initial='hidden'
          final='show'
          animate={controls}
        >
          <Text>
            We do not cook,
            <br />
            we create your
            <br />
            emotions!
          </Text>
          <Button2>Explore More</Button2>
        </HeroLeft>
        <HeroRight>
          <Images>
            <Image1 src='/Images/Hero-4.png' alt='qwerrt'></Image1>
            <Image2 src='/Images/Hero-5.png' alt='qwerrt'></Image2>
            <Image3 src='/Images/Hero-6.png' alt='qwerrt'></Image3>
          </Images>
        </HeroRight>
      </HeroSections>
    </section>
  )
}

export default HeroSection

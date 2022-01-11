import React from 'react'
import { useScroll } from '../../UseScroll/UseScroll'
import { zoomInAnimate } from '../Animate/Animate'
import { PrimaryHeading } from '../GlobalStyles/globalstyles'
import {
  MainContainer,
  ContainerLeft,
  ContainerRight,
  Paragraph,
  Image,
  Section,
} from './Banner.styles'
const Banner = () => {
  const [element, control] = useScroll()
  return (
    <Section ref={element}>
      <MainContainer>
        <ContainerLeft>
          <Image
            variants={zoomInAnimate}
            initial='hidden'
            final='show'
            animate={control}
          >
            <img src='/Images/illustration.png' alt='imag'></img>
          </Image>
        </ContainerLeft>
        <ContainerRight>
          <PrimaryHeading>We are doing more than you expect</PrimaryHeading>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            aliquam consectetur, eaque, ipsam reiciendis recusandae harum iste
            adipisci, expedita accusantium architecto minus sunt mollitia itaque
            placeat commodi eum explicabo necessitatibus?
          </Paragraph>
          <br />
          <br />
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            aliquam consectetur, eaque, ipsam reiciendis recusandae harum iste
            adipisci, expedita accusantium architecto minus sunt mollitia itaque
            placeat commodi eum explicabo necessitatibus? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rem adipisci placeat laborum
            aperiam? Animi non deleniti mollitia nihil. Illo illum minus sit
            adipisci ad nostrum dolores cum animi nulla vitae.
          </Paragraph>
        </ContainerRight>
      </MainContainer>
    </Section>
  )
}

export default Banner

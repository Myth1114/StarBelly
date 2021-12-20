import React from 'react'
import { PrimaryHeading } from '../GlobalStyles/globalstyles'
import {
  Container,
  ContainerLeft,
  SubHeading,
  Services,
  ServicesList,
  Icon,
  Text,
  ContainerRight,
  Image,
} from './whyus.styles'

import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import MoneyIcon from '@material-ui/icons/Money'
import PanToolIcon from '@material-ui/icons/PanTool'
import { useScroll } from '../../UseScroll/UseScroll'
import { ImageAnimation } from '../Animate/Animate'
const WhyUs = () => {
  const [element, controls] = useScroll()
  return (
    <Container>
      <ContainerLeft>
        <PrimaryHeading>Why Should You Use Our Service ?</PrimaryHeading>
        <SubHeading>
          Praesent vel felis maximus tellus luctus interdum nec et massa.
          Integer cursus molestie justo, at eleifend metus rhoncus quis.{' '}
        </SubHeading>
        <Services>
          <ServicesList>
            <Icon>
              <LocalShippingIcon
                style={{ color: '#F95837', fontSize: '3rem' }}
              />
            </Icon>
            <Text>We provide the fastest service</Text>
          </ServicesList>
          <ServicesList>
            <Icon>
              <MoneyIcon style={{ color: '#F95837', fontSize: '3rem' }} />
            </Icon>
            <Text>No additional fees for orders</Text>
          </ServicesList>
          <ServicesList>
            <Icon>
              <PanToolIcon style={{ color: '#F95837', fontSize: '3rem' }} />
            </Icon>
            <Text>Fast and reliable delivery</Text>
          </ServicesList>
        </Services>
      </ContainerLeft>
      <ContainerRight ref={element}>
        <Image
          variants={ImageAnimation}
          initial='hidden'
          final='show'
          animate={controls}
        >
          <img src='/Images/deliveryboy.png' alt='aj'></img>
        </Image>
      </ContainerRight>
    </Container>
  )
}

export default WhyUs

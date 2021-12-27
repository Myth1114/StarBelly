import React from 'react'
import {
  ServicesSection,
  Container,
  Box,
  Number,
  TextDiv,
  Heading,
  SubHeading,
} from './Services.styles'
const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <div className='empty'></div>
        <Box>
          <Number>01</Number>
          <TextDiv>
            <Heading>We are located in the city center</Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              libero dolorem in harum quibusdam, magnam odit possimus blanditiis
              itaque minima ullam, consequatur maxime necessitatibus voluptatum
              eaque natus, mollitia expedita recusandae.
            </SubHeading>
          </TextDiv>
        </Box>
        <Box>
          <Number>01</Number>
          <TextDiv>
            <Heading>Fresh ingredients from organic farms</Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              libero dolorem in harum quibusdam, magnam odit possimus blanditiis
              itaque minima ullam, consequatur maxime necessitatibus voluptatum
              eaque natus, mollitia expedita recusandae.
            </SubHeading>
          </TextDiv>
        </Box>
        <Box>
          <Number>01</Number>
          <TextDiv>
            <Heading>Own fast delivery. 30 min Maximum</Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              libero dolorem in harum quibusdam, magnam odit possimus blanditiis
              itaque minima ullam, consequatur maxime necessitatibus voluptatum
              eaque natus, mollitia expedita recusandae.
            </SubHeading>
          </TextDiv>
        </Box>
        <Box>
          <Number>01</Number>
          <TextDiv>
            <Heading>Professional, experienced chefs</Heading>
            <SubHeading>
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam
            </SubHeading>
          </TextDiv>
        </Box>
        <Box>
          <Number>01</Number>
          <TextDiv>
            <Heading>The highest standards of service</Heading>
            <SubHeading>
              Porro nemo veniam necessitatibus praesentium eligendi rem
              temporibus adipisci quo modi numquam.
            </SubHeading>
          </TextDiv>
        </Box>
      </Container>
    </ServicesSection>
  )
}

export default Services

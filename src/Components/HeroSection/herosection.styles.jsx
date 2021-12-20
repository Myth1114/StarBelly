import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
const fadeInOut = keyframes`
0% {
    -webkit-transform: scale(1);
    transition: all 2s ease-in-out;
  }
  50% {
    -webkit-transform: scale(1.1);
    transition: all 2s ease-in-out;
  }
  100% {
    -webkit-transform: scale(1);
    transition: all 2s ease-in-out;
  }
`

export const HeroSections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 70px 60px 0 60px;
  @media (max-width: 600px) {
    justify-content: center;
    margin: 60px 10px 0 10px;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const Text = styled.h1`
  font-size: 60px;
  color: #231e41;
  @media (max-width: 600px) {
    font-size: 30px;
    text-align: center;
  }
`
export const HeroLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeroRight = styled.div`
  display: flex;
  // flex-direction: column;
  // align-items: center;
  // height: 100vh;
  @media (min-width: 768px) {
    margin-left: 12rem;
    margin-bottom: 2rem;
  }
`

export const Images = styled.div`
  position: relative;
  width: 100%;
  // float: right;
`

export const Image1 = styled.img`
  position: absolute;
  top: 62%;
  right: 83%;
  z-index: 1;
  animation: ${fadeInOut} 3s infinite ease-in-out;
  @media (max-width: 600px) {
    right: 0;
    top: 85%;
    width: 50%;
  }
`
export const Image2 = styled.img`
  z-index: 2;
  animation: ${fadeInOut} 2s infinite ease-in-out;
  @media (max-width: 600px) {
    right: 0;
    width: 50%;
    margin-left: 4rem;
  }
`
export const Image3 = styled.img`
  position: absolute;
  top: -25%;
  z-index: 3;
  left: -93%;
  animation: ${fadeInOut} 4s infinite ease-in-out;
  @media (max-width: 600px) {
    width: 60%;
    top: 98%;
    left: -4%;
  }
`

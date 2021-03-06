import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 6rem 1rem;
  @media (max-width: 600px) {
    margin: 3rem 0.5rem;
  }
`
// Container,
//   ContainerLeft,
//   SubHeading,
//   Services,
//   ServicesList,
//   Icon,
//   Text,
//   ContainerRight,
//   Image,
//   Img,
export const ContainerLeft = styled.div`
  flex: 58%;
`
export const ContainerRight = styled.div`
  //   margin: 0 2rem;
`
export const SubHeading = styled.p`
  text-align: justify;
`
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  @media (max-width: 600px) {
    margin: 0;
  }
`
export const ServicesList = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 15%);
  padding: 1.5rem 1rem;
  //   width: 70%;
`
export const Icon = styled.span`
  margin: 0rem 1rem;
`
export const Text = styled.span`
  font-size: 1.4rem;
  color: #231e41;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`
export const Image = styled(motion.div)``

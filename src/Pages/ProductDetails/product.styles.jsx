import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SectionContainer = styled(motion.div)`
  // margin-top: 5rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //   flex-wrap: wrap;
  margin: 4rem;
`
export const ContainerLeft = styled.div``
export const Image = styled.div``
export const ContainerRight = styled.div`
  //   flex: 48%;
`
export const ItemDetails = styled.div`
  margin: 1rem;
  > * {
    margin-bottom: 1rem;
  }
`
export const Product = styled.div`
  background-color: #f2f3f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 4rem;
  width: 100%;
`
export const Name = styled.span`
  font-size: 1.7rem;
  margin-left: 0.5rem;
`
export const Price = styled.span`
  background-color: #f5c332;
  color: #231e41;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
`
export const Description = styled.p`
  color: #6f6f87;
  margin: 0;
  font-size: 15px;
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #f5c332;
  font-size: 0.8rem;
`

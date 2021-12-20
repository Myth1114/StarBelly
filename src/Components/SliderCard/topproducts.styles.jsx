import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SectionTopProducts = styled.section`
  margin: 6rem 1rem;
  @media (max-width: 600px) {
    margin: 3rem 0.5rem;
  }
`
export const TopProduct = styled(motion.div)`
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  // margin: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ArrowBackIosIcon = styled.svg`
  margin-left: 5px;
`

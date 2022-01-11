import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Section = styled.div`
  margin: 3rem 1rem;
`
export const MainContainer = styled.div`
  display: flex;
 flex-wrap: wrap;
`
export const ContainerLeft = styled.div`
     display: flex;
    // position: relative;
    // padding-bottom: 50%;
    // width: 100%;
}
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Paragraph = styled.p`
  // width: 40rem;
  color: #6f6f87;
  margin: 0;
  font-size: 15px;
  text-align: justify;
`
export const Image = styled(motion.div)`
  // position: absolute;
  // overflow: hidden;
  // z-index: 2;
  // width: 80%;
  // height: 90%;
  // bottom: 10%;
  // left: 0;
  // box-shadow: 0 6px 8px -6px rgb(0 0 0 / 10%);
`

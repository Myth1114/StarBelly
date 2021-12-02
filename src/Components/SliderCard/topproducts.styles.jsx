import styled, { css } from 'styled-components'

export const DefaultArrow = css`
  height: 40px;
  width: 40px;
  font-size: 12px;
  border-radius: 50%;
  border: solid 2px #231e41;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`

export const SectionTopProducts = styled.section`
  margin: 6rem 1rem;
`
export const TopProduct = styled.div`
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  // margin: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`
export const Image = styled.img`
  width: 20rem;
  border-radius: 0.7rem;
  &:hover {
    transform: scale(0.97);
  }
`
export const Text = styled.div`
  background-color: #f2f3f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 4rem;
`
export const Name = styled.span`
  line-height: 120%;
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 600;
  color: #231e41;
`

export const Price = styled.span`
  background-color: #f5c332;
  color: #231e41;
  font-size: 1rem;
  font-weight: bold;
`
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin: 1rem;
`

export const Arrow = styled.div`
  display: flex;
`

export const NextArrow = styled.span`
  ${DefaultArrow}
`
export const PrevArrow = styled.span`
  ${DefaultArrow}
  margin-right:5px
`
export const ArrowBackIosIcon = styled.svg`
  margin-left: 5px;
`

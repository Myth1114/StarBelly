import styled from 'styled-components'

export const ServicesSection = styled.div`
  margin: 3rem 1rem;
  @media (max-width: 600px) {
    margin: 3rem 0.5rem;
  }
`
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  grid-row-gap: 1rem;
`
export const Box = styled.div`
  display: flex;
`
export const Number = styled.div`
  color: #f5c332;
  font-size: 42px;
  line-height: 36px;
  margin-right: 1rem;
  font-weight: bold;
`
export const TextDiv = styled.div``
export const Heading = styled.div`
  color: #231e41;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
`
export const SubHeading = styled.p`
  color: #6f6f87;
  margin: 0;
  font-size: 15px;
  text-align: justify;
`

import styled from 'styled-components'
// SectionContainer,
// Container,
// Categories,
// Text,
// Image,
export const SectionContainer = styled.section`
  margin: 6rem 1rem;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  &:nth-child(odd) {
    background: antiquewhite;
  }
  &:nth-child(even) {
    background-color: rgba(224, 231, 255, 1);
  }
  &:nth-child(3) {
    background-color: #f2f3f5;
  }
  &:nth-child(6) {
    background-color: #f2f3f5;
  }
`
export const Text = styled.span`
  font-size: 0.8rem;
`
export const Image = styled.div`
  padding: 1rem;
`

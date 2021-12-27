import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 6rem 1rem;
  @media (max-width: 600px) {
    margin: 2rem .5rem;
  }
`
export const ReviewSection = styled.div`
  scroll-behavior: smooth;
  display: flex;
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 20px 10px;
`
export const Title = styled.span``
export const Ratings = styled.span``
export const Paragraph = styled.p`
  width: 35rem;
`

// export const MainContainer=styled.div``
// export const MainContainer=styled.div``

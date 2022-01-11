import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 6rem 1rem;
  @media (max-width: 600px) {
    margin: 2rem 0.5rem;
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
export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #231e41;
`
export const Ratings = styled.h1`
  color: #f5c332;
  font-size: 24px;
`
export const Paragraph = styled.p`
  width: 35rem;
  color: #6f6f87;
  margin: 0;
  font-size: 15px;
  text-align: justify;
`

// export const MainContainer=styled.div``
// export const MainContainer=styled.div``

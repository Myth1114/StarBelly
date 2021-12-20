import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
`
export const Image = styled.img`
  width: 20rem;
  border-radius: 0.7rem;
  &:hover {
    transform: scale(0.97);
  }
  @media (max-width: 600px) {
    width: 15rem;
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

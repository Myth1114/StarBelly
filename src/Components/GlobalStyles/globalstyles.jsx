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

export const Button = styled.button`
  position: relative;
  background-color: #f5c332;
  color: #fff;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.7em 1em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`
export const Button2 = styled(Button)`
  background: #f5c332;
  color: #fff;
  &:hover {
    background: #fff;
    color: #f5c332;
    border: 1px solid #f5c332;
    transition: all 0.3s ease-in-out;
  }
`

export const PrimaryHeading = styled.h1`
  font-size: 40px;
  letter-spacing: -2px;
  color: #231e41;
  @media (max-width: 600px) {
    font-size: 25px;
  }
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

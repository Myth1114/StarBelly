import styled from 'styled-components'

export const AllRestaurants = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin-bottom: 1.5rem;
`
export const RecipeCard = styled.div`
  background: #fafafa;
  margin: 1rem;
  //   width: 450px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  // overflow: hidden;
  text-transform: capitalize;
`
export const Aside = styled.div`
  position: relative;
  overflow: hidden;
`
export const Article = styled.div`
  position: relative;
`
export const Paragraph = styled.p`
  margin: 0.5rem 0;
  font-size: em(13);
  font-weight: 400;
  color: #666;
`
export const Img = styled.img`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    // overflow: hidden;
  }
`

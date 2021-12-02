import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 6rem 1rem;
`
// Container,
//   ContainerLeft,
//   SubHeading,
//   Services,
//   ServicesList,
//   Icon,
//   Text,
//   ContainerRight,
//   Image,
//   Img,
export const ContainerLeft = styled.div`
  flex: 58%;
`
export const ContainerRight = styled.div`
  //   margin: 0 2rem;
`
export const SubHeading = styled.p`
  text-align: justify;
`
export const Services = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`
export const ServicesList = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 10px 0px rgb(0 0 0 / 15%);
  padding: 1.5rem 1rem;
  //   width: 70%;
`
export const Icon = styled.span`
  margin: 0rem 1rem;
`
export const Text = styled.span`
  font-size: 1.4rem;
  color: #231e41;
  font-weight: bold;
`
export const Image = styled.div``
export const Img = styled.img``

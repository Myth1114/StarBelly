
import styled ,{ keyframes }  from "styled-components";

const fadeInOut = keyframes`
0% {
    -webkit-transform: scale(1);
    transition: all 2s ease-in-out;
  }
  50% {
    -webkit-transform: scale(1.1);
    transition: all 2s ease-in-out;
  }
  100% {
    -webkit-transform: scale(1);
    transition: all 2s ease-in-out;
  }
`

export const HeroSections=styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 70px 50px 0 50px;
`

export const Text=styled.h1`
font-family: 'Monoton', cursive;
font-size: 60px;
color:#231e41;
`
export const HeroLeft=styled.h1`

`
export const HeroRight=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Images=styled.div`
position: relative;
width: 100%;
float: right;
`

export const Image1=styled.img`
position: absolute;
top: 35%;
right: -5%;
z-index: 1;
animation: ${fadeInOut} 3s infinite ease-in-out;
`
export const Image2=styled.img`
top: 5%;
width: 60%;
 right: 10%;
 z-index: 2;
 animation: ${fadeInOut} 2s infinite ease-in-out;
`
export const Image3=styled.img`
position: absolute;
  top: 39%;
  z-index: 3;
  left: -59%;
  animation: ${fadeInOut} 4s infinite ease-in-out;
`
import styled from "styled-components";
import {upSideDown} from '../../Components/GlobalStyles/globalstyles'
export const Container =styled.div`
position:relative;
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:1rem;
margin:8rem 8rem; 
@media (max-width: 600px) {
    grid-template-columns:1fr;
    margin:1rem;
}
`

export const LeftBox =styled.div``

export const Image =styled.div`
position:absolute;
top:80%;
left:40%;
`

export const Img=styled.img`
animation: ${upSideDown} 3s infinite ease-in-out;
width:15rem;
`
export const Small=styled.span`
color:#231E41;
`
export const Text=styled.div``

export const Heading=styled.h1`
    font-size: 4rem;
    color: #231e41;
    width:35rem;
        @media (max-width: 600px) {
        font-size: 2rem;
        text-align: center;
       width:auto;
        }
`
export const Para=styled.p`
margin:1rem 0;
`
export const RightBox =styled.div`
    margin:0 5rem;
    position:relative;
    &::before {
        content: "";
        position:absolute;
        top: -30%;
        left: -15%;
        background-color:#F5C332;
        height:2rem;
        width:2rem;
        border-radius:50%;
      }
      @media (max-width: 600px) {
        margin:0 1rem;
    }
`

export const Message =styled.div`
font-size:1.5rem;
font-weight:bold;
text-align:center;
margin-bottom:2rem;
`
export const Form =styled.form`
        
`
export const Input =styled.input`
height: 3rem;
margin:.5rem 0;
position: relative;
font-size: 14px;
background-color: #F9FAFC;
display: block;
width: 100%;
border: none;
outline:none;
border-bottom: solid 1px #f5c332;;
        
`
export const Label =styled.label`

        
`
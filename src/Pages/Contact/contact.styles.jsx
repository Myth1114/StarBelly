import styled from "styled-components";

export const Container =styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:1rem;
margin:4rem 8rem; 
@media (max-width: 600px) {
    margin:1rem;
}
`

export const LeftBox =styled.div`

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
        
`
export const Message =styled.div`
text-align:center;
`
export const Form =styled.form`
        
`
export const Input =styled.input`
height: 50px;
position: relative;
padding: 0 20px;
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
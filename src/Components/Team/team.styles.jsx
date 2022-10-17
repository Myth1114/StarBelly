import styled from "styled-components";

export const MainContainer=styled.div`
margin: 6rem 1rem;
  @media (max-width: 600px) {
    margin: 2rem 0.5rem;
  }
`
export const Heading=styled.div`
 display:flex;
 justify-content:space-between;
`

export const Box=styled.div`
 display:grid;
 grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));
 gap: 3rem;
 margin: 1rem 8rem;
 align-items:center;
 text-align:center;
`
export const Members=styled.div`
 > * {
    margin-bottom:1rem;
}
`

export const Image=styled.div`
position:relative;
overflow:hidden;
&:before{
 content: "";
 background-color: #F5C332;
 border-radius: 50%;
 width: 70%;
 height: 57%;
 position: absolute;
 bottom: 15%;
 left: 15%;
 border: dotted 3px #FFFFFF;
 box-shadow: 0 0 0 3px #F5C332;
 filter: blur(5px);
 transition: 0.3s ease-in-out;
 }
`
export const Img=styled.img`
 width:100%;
 vertical-align: middle;
 &:hover{
    transform:scale(1.1);
    transition: 0.3s ease-in-out;
 }
`
export const Name=styled.div``
export const H3=styled.h3`
margin-bottom:1rem;
`
export const Social=styled.div``
export const Icon=styled.span`
  margin-right: .5rem;
  transition: all .4s ;
  &:hover{
    cursor:pointer;
    color:#f5c332;
    transition: all .4s ;
  }
`

export const Role=styled.span`
 color: #6F6F87;
`
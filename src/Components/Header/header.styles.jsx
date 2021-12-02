import styled from "styled-components";


export const HeaderContainer=styled.section`
width: 100%;
  background: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  z-index: 100;
 opacity:0.96;
`
export const Nav=styled.div`
display: flex;
  justify-content: space-around;
  align-items: center;
  
`
export const StarBelly=styled.div`
color: #231e41;
`

export const MenusUl=styled.ul`
display: flex;
align-items: center;
list-style-type: none;
`
export const MenusUlLi=styled.li`
padding: 0 30px;
font-weight: bold;
height: 100%;
color: #231e41;
font-size: 14px;
transition: 0.3s ease-in-out;
cursor: pointer;
`

export const Button=styled.button`
background: ${props => props.primary ? "#F5C332" : "#231e41"};
  color: ${props => props.primary ? "#231e41" : "#F5C332"};
  font-size: .9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #F5C332;
  border-radius: 3px;
  cursor:pointer;
`
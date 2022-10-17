import styled from "styled-components";
import { upSideDown } from "../../Components/GlobalStyles/globalstyles";

export const ContactPage = styled.div`
  position: relative;
`;
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 8rem 8rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;

export const LeftBox = styled.div``;

export const Image = styled.div`
  position: absolute;
  left: 50%;
  top: 120%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const Img = styled.img`
  animation: ${upSideDown} 3s infinite ease-in-out;
  width: 15rem;
`;
export const Small = styled.span`
  color: #231e41;
`;
export const Text = styled.div``;

export const Heading = styled.h1`
  font-size: 4rem;
  color: #231e41;
  width: 35rem;
  @media (max-width: 600px) {
    font-size: 2rem;
    text-align: center;
    width: auto;
  }
`;
export const Para = styled.p`
  margin: 1rem 0;
`;
export const RightBox = styled.div`
  margin: 0 5rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -15%;
    background-color: #f5c332;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`;

export const Message = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
export const Form = styled.form``;
export const Input = styled.input`
  height: 3rem;
  margin: 0.5rem 0;
  position: relative;
  font-size: 14px;
  background-color: #f9fafc;
  display: block;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: solid 1px #f5c332; ;
`;
export const Label = styled.label``;
// export const Submit=styled.submit``

export const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1rem;
  margin: 14rem 1rem 4rem 1rem;
`;
export const Box = styled.div`
  display: grid;
  grid-template-columns: 35% 55%;
  align-items: center;
`;
export const Number = styled.div`
  grid-column: 1;
  font-size: 4rem;
  margin-right: 2rem;
  color: #f5c332;
`;
export const Detail = styled.div`
  width: 100%;
  grid-column: 2;
`;
export const H2 = styled.h2``;
export const Info = styled.span`
  color: #6f6f87;
`;

export const Footer = styled.div`
  bottom: 0;
  left: 0;
  margin: 0 1rem;
`;
export const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1rem;
  justify-items: center;
   align-items: center;
`;
export const Social = styled.div`
  display: flex;
  // text-align: center;
  // justify-content: center;
`;
export const Icon = styled.div`
  margin-right: 1rem;
  transition: all .4s ;
  &:hover{
    cursor:pointer;
    color:#f5c332;
    transition: all .4s ;
  }
`;
export const Right = styled.div`
  // justify-self:end;
`;
export const Content = styled.span`
color: #6F6F87;
`;

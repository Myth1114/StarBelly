import React from "react";
import { AnimatedButton } from "../../Components/GlobalStyles/globalstyles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { StarBelly } from "../../Components/Header/header.styles";
import {
  ContactPage,
  Container,
  Text,
  LeftBox,
  RightBox,
  Heading,
  Message,
  Form,
  Label,
  Input,
  Para,
  Small,
  Image,
  Img,
  Services,
  Box,
  Number,
  Detail,
  H2,
  Info,
  FooterContents,
  Footer,
  Social,
  Icon,
  Right,
  Content,
} from "./contact.styles";
const contact = () => {
  return (
    <ContactPage>
      <Container>
        <Image>
          <Img src="/Images/envelope1.png" alt="envelope"></Img>
        </Image>
        <LeftBox>
          <Small>Contact</Small>
          <Text>
            <Heading>Get in Touch with Starbelly</Heading>
            <Para>
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo
              modi.
            </Para>
          </Text>
        </LeftBox>
        <RightBox>
          <Text>
            <Message>Send Message</Message>
          </Text>
          <Form>
            <Label>Name</Label>
            <Input type="text" placeholder="name"></Input>
            <Label>Message</Label>
            <Input type="text" placeholder="message"></Input>
            <AnimatedButton>Button</AnimatedButton>
          </Form>
        </RightBox>
      </Container>
      <Services>
        <Box>
          <Number>01</Number>
          <Detail>
            <H2>Welcome</H2>
            <Info>welcome to Starbelly</Info>
          </Detail>
        </Box>
        <Box>
          <Number>02</Number>
          <Detail>
            <H2>Call</H2>
            <Info>1234567890</Info>
          </Detail>
        </Box>
        <Box>
          <Number>03</Number>
          <Detail>
            <H2>Write</H2>
            <Info>starbelly123@gmail.com</Info>
          </Detail>
        </Box>
      </Services>
      <Footer>
        <FooterContents>
          <StarBelly>
            <h2>StarBelly</h2>
          </StarBelly>
          <Social>
            <Icon><FacebookIcon/></Icon>
            <Icon><TwitterIcon/></Icon>
            <Icon><InstagramIcon/></Icon>
          </Social>
          <Right>
            <Content>All Right reserved, Myth</Content>
          </Right>
        </FooterContents>
      </Footer>
    </ContactPage>
  );
};

export default contact;

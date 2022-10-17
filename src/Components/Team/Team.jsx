import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button, PrimaryHeading } from "../GlobalStyles/globalstyles";
import {
  MainContainer,
  Heading,
  Box,
  Members,
  Image,
  Img,
  Name,
  Role,
  H3,
  Social,
  Icon,
} from "./team.styles";
const Team = () => {
  return (
    <MainContainer>
      <Heading>
        <PrimaryHeading>They will Cook For You</PrimaryHeading>
        <Button>Explore More</Button>
      </Heading>
      <Box>
        <Members>
          <Image>
            <Img src="/Images/1.png" alt="sss"></Img>
          </Image>
          <Name>
            <H3>Andrew</H3>
            <Role>Staff</Role>
          </Name>
          <Social>
            <Icon>
              <FacebookIcon style={{fontSize:'1.3rem'}} />
            </Icon>
            <Icon>
              <TwitterIcon style={{fontSize:'1.3rem'}} />
            </Icon>
            <Icon>
              <InstagramIcon style={{fontSize:'1.3rem'}} />
            </Icon>
          </Social>
        </Members>
        <Members>
          <Image>
            <Img src="/Images/2.png" alt="sss"></Img>
          </Image>
          <Name>
            <H3>Genelia</H3>
            <Role>Staff</Role>
          </Name>
          <Social>
            <Icon>
              <FacebookIcon style={{fontSize:'1.3rem'}} />
            </Icon>
            <Icon>
              <TwitterIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
            <Icon>
              <InstagramIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
          </Social>
        </Members>
        <Members>
          <Image>
            <Img src="/Images/3.png" alt="sss"></Img>
          </Image>
          <Name>
            <H3>Oscar Oldman</H3>
            <Role>Staff</Role>
          </Name>
          <Social>
            <Icon>
              <FacebookIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
            <Icon>
              <TwitterIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
            <Icon>
              <InstagramIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
          </Social>
        </Members>
        <Members>
          <Image>
            <Img src="/Images/4.png" alt="sss"></Img>
          </Image>
          <Name>
            <H3>Ed Freeman</H3>
            <Role>Staff</Role>
          </Name>
          <Social>
            <Icon>
              <FacebookIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
            <Icon>
              <TwitterIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
            <Icon>
              <InstagramIcon style={{fontSize:'1.3rem'}}/>
            </Icon>
          </Social>
        </Members>
      </Box>
    </MainContainer>
  );
};

export default Team;

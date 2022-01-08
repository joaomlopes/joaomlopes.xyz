import React from "react";
import profilePicture from "./profile-picture.jpg";
import styled from "styled-components";
import { Grid, Typography, SvgIcon } from "@material-ui/core";

const HeaderContainer = styled(Grid)`
  position: relative;
  width: 100%;
  height: 325px;
  background: #282c34;
  color: #eef1f5;
  border-radius: 4px;

  svg {
    position: absolute;
    fill: #eef1f5;
    bottom: -1px;
    width: 100%;
    height: 3vw;
  }
`;

const ProfilePicture = styled.div`
  height: 130px;
  width: 130px;
  border: 5px solid #eef1f5;
  border-radius: 50%;
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;
  background-position: top;
  margin-bottom: 15px;
`;

const Name = styled(Typography).attrs({ variant: "h2" })`
  && {
    margin: 5px 0;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const Job = styled(Typography).attrs({ variant: "h6" })`
  margin: 5px 0;
`;

function HomeHeader() {
  return (
    <HeaderContainer
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <polygon points="0,200 200,0 200,200"></polygon>
      </SvgIcon>
      <Grid item>
        <ProfilePicture src={profilePicture} />
      </Grid>
      <Grid item>
        <Name>João Lopes</Name>
      </Grid>
      <Grid item>
        <Job>Senior Full Stack Developer</Job>
      </Grid>
    </HeaderContainer>
  );
}

export default HomeHeader;

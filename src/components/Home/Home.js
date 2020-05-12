import React from "react";
import styled from "styled-components";
import { Container, Box } from "@material-ui/core";
import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeWrapper = styled(Box)`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #282c34;
`;

function Home() {
  return (
    <HomeContainer maxWidth="md">
      <HomeWrapper>
        <HomeHeader />

        <HomeBody />
      </HomeWrapper>
    </HomeContainer>
  );
}

export default Home;

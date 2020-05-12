import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import Home from "./components/Home";
import "./App.scss";

const AppWrapper = styled(Box)`
  background-color: #20232c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

function App() {
  return (
    <AppWrapper maxWidth="sm">
      <Home />
    </AppWrapper>
  );
}

export default App;

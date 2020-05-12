import React from "react";
import styled from "styled-components";
import { Grid, Icon, Typography } from "@material-ui/core";

const BodyContainer = styled(Grid)`
  position: relative;
  width: 100%;
  height: 325px;
  background: #eef1f5;
  color: #282c34;
  border-radius: 4px;
`;

const Topic = styled(Typography).attrs({ variant: "body1" })`
  && {
    margin: 10px 0;
    font-size: calc(10px + 1vmin);
    text-transform: uppercase;
    padding: 0 15px;
    text-align: justify;
  }
`;

const SocialContainer = styled(Grid)`
  margin: 50px auto 40px;
`;

const SocialItem = styled(Icon)`
  color: #282c34;
  margin: 0 10px;

  &:hover {
    opacity: 0.9;
  }
`;

function HomeBody() {
  return (
    <BodyContainer
      container
      direction="column"
      justify="flex-end"
      alignItems="center"
    >
      <Topic>
        <span role="img" aria-label="hello">
          💻
        </span>{" "}
        A Frontend Developer with a DevOps side.
      </Topic>
      <Topic>
        <span role="img" aria-label="hello">
          ⚽️
        </span>{" "}
        A sports addict and a futsal youth coach.
      </Topic>
      <Topic>
        <span role="img" aria-label="hello">
          🎧
        </span>{" "}
        A music lover but not a music maker.
      </Topic>

      <SocialContainer
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <a
          href="https://twitter.com/shakurlopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialItem className="fab fa-twitter" title="Twitter" />
        </a>
        <a
          href="https://instagram.com/shakurlopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialItem className="fab fa-instagram" title="Instagram" />
        </a>
        <a
          href="https://linkedin.com/in/joaomlopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialItem className="fab fa-linkedin" title="Linkedin" />
        </a>
        <a
          href="https://github.com/joaomlopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialItem className="fab fa-github" title="Github" />
        </a>
        <a
          href="https://dev.to/shakurlopes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialItem className="fab fa-dev" title="DEV" />
        </a>
      </SocialContainer>
    </BodyContainer>
  );
}

export default HomeBody;

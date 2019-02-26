import React from "react";
import styled from "styled-components";

import Title from "./Title";
import Links from "./Links";

const Container = styled.div`
  align-items: center;
  background: #4169e1;
  display: flex;
  font-family: "Open Sans", sans-serif;
  height: 60px;
  justify-content: space-between;
  padding: 0px 25px;
`;

const NavBar = props => {
  return (
    <Container>
      <Title />
      <Links />
    </Container>
  );
};

export default NavBar;

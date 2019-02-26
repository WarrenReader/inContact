import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul`
  display: flex;
`;

const LinkBox = styled.li`
  border-bottom: 1px solid transparent;
  margin: 0 10px;
  padding: 0 4px 8px 4px;
  transition: 0.5s;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
`;

const Links = props => (
  <Container>
    <LinkBox>
      <StyledLink to="/about">About</StyledLink>
    </LinkBox>
    <LinkBox>
      <StyledLink to="#">Login</StyledLink>
    </LinkBox>
  </Container>
);

export default Links;

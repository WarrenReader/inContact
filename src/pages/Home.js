import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section1 = styled.div`
  background: #4169e1;
  height: 500px;
`;

const Home = props => {
  return (
    <React.Fragment>
      <Section1 />
    </React.Fragment>
  );
};

export default Home;

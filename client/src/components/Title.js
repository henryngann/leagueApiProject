import React from "react";
import styled from "styled-components";

const TitleMessage = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Title = () => {
  return <TitleMessage className="mt-5">Search a Champion</TitleMessage>;
};

export default Title;

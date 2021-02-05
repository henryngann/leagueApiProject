import React from "react";
import styled from "styled-components";
const Message = styled.h1`
  font-size: 3em;
  text-align: center;
  color: white;
  margin-top: 10rem;
  margin-right: 1rem;
  margin-left: 5rem;
`;
const SkillsTitle = () => {
  return <Message>Skills: </Message>;
};

export default SkillsTitle;

import React from "react";
import styled from "styled-components";

const Description = styled.div`
  margin-bottom: 10rem;
  align-self: center;
  color: white;
  position: relative;
  right: 58.5rem;
  margin-top: 15rem;
  margin-left: 5rem;
`;

const SkillsDesc = (props) => {
  return (
    <Description>
      <p style={{ width: "61rem" }}>
        <strong>{props.sname}</strong>
      </p>
      <br></br>
      <p style={{ width: "61rem" }}>{props.description}</p>
    </Description>
  );
};

export default SkillsDesc;

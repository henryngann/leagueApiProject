import React from "react";
import styled from "styled-components";

const Description = styled.div`
  color: white;
  margin-top: 1rem;
  margin-left: 2rem;
`;

const SkillsDesc = (props) => {
  return (
    <Description>
      <p style={{ width: "20rem" }}>
        <strong>{props.sname}</strong>
      </p>
      <br></br>
      <p style={{ width: "45rem" }}>{props.description}</p>
    </Description>
  );
};

export default SkillsDesc;

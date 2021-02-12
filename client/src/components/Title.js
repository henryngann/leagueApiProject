import React from "react";
import styled from "styled-components";
import "../media/Title.css";
const TitleMessage = styled.h1`
  font-size: 8em;
  text-align: center;
  color: palevioletred;
`;

const Title = () => {
  return (
    <TitleMessage className="mt-5 d-flex justify-content-center">
      <p className="titleani1 ">Choose</p>{" "}
      <p className="titleani2 mx-5">your</p>
      <p className="titleani3">
        <i>Champion</i>
      </p>
    </TitleMessage>
  );
};

export default Title;

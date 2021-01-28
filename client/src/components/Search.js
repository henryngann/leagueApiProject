import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 500px;
  height: 50px;
`;
const Search = () => {
  return (
    <Wrapper className="container d-flex justify-content-center">
      <div className="form-floating mt-5">
        <input
          type="search"
          className="form-control"
          id="floatingInput"
          placeholder="Search a Champion"
        />
        <label htmlFor="floatingInput">Click Me!</label>
      </div>
    </Wrapper>
  );
};

export default Search;

import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 10%;
  }
`;

const Spinner = () => {
  return (
    <StyledDiv>
      <img src="/images/Spinner.svg" />
    </StyledDiv>
  );
};

export default Spinner;

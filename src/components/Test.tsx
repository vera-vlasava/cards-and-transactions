import React from "react";
import styled from "styled-components";
import dkb from "../assets/dkb-logo.svg";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TestCard = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: gray;
  border-radius: 20px;
`;
const DKBLogo = styled.div`
  width: 20px;
  height: 15px;
  background-image: url(${dkb});
`;
const Test = () => {
  return (
    <Wrapper>
      <TestCard>
        <DKBLogo />
      </TestCard>
    </Wrapper>
  );
};

export default Test;

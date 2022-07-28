import React from "react";
import styled from "styled-components";
import { media } from "../styles/media";

function GoAppBox() {
  return (
    <GoAppLinkStyled>
      <a href="https://app.lonessum.com">매칭하러 가기</a>
    </GoAppLinkStyled>
  );
}

export const GoAppLinkStyled = styled.div`
  margin: 100px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 68px;
  font-weight: 600;
  background-color: #ffff;
  color: #171717;
  border-radius: 50px;
  font-size: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${media.medium} {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
`;

export default GoAppBox;

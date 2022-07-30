import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Logo } from "../assets/img";
import { media } from "../styles/media";
import GoAppBox from "./GoAppBox";
import { ImageWrapper } from "./Header";

function Finish() {
  return (
    <FinishLayout>
      <FinishContent>
        <ImageWrapper>
          <Image src={Logo} width={102} height={102} alt="외딴썸 로고" />
        </ImageWrapper>
        지금 외딴썸에서 <br /> 유학생 연인을 찾아보세요.
        <GoAppBox />
      </FinishContent>
    </FinishLayout>
  );
}

const FinishLayout = styled.div`
  background-color: #4adac4;
  padding: 100px 0;
  color: #ffff;
`;
const FinishContent = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.medium} {
    font-size: 18px;
  }
`;

export default Finish;

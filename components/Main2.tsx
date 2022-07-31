import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Demonstration3 } from "../assets/img";
import { media } from "../styles/media";
import { ImageWrapper } from "./Header";
import {
  DescriptionTit,
  MainContentsReverse,
  MainLayout,
  MainRightDescription,
  SubTit,
} from "./Main1";

function Main2() {
  return (
    <MainBackground>
      <MainLayout>
        <CenterContents>
          <MainRightDescription>
            <DescriptionTit>기피학교 설정</DescriptionTit>
            <SubTit>
              기피학교 설정으로 <br /> 아는 사람 피하기
            </SubTit>
            <div>
              기피학교 설정을 통해 <br />
              동문과의 매칭을 피할 수 있어요!
              <br /> 더 이상 눈치보지 말고 매칭하세요!
            </div>
          </MainRightDescription>
          <SmallImageWrapper>
            <Image
              src={Demonstration3}
              width={274}
              height={521}
              alt="설문 이미지"
            />
          </SmallImageWrapper>
        </CenterContents>
      </MainLayout>
    </MainBackground>
  );
}
const MainBackground = styled.div`
  background-color: #f9fafc;
`;

const SmallImageWrapper = styled(ImageWrapper)`
  padding: 0 62px;
`;

const CenterContents = styled(MainContentsReverse)`
  ${media.medium} {
    text-align: center;
  }
  width: 100%;
  padding: 60px 0;
`;

export default Main2;

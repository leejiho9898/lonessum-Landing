import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Demonstration1, Demonstration5 } from "../assets/img";
import { media } from "../styles/media";
import { Contents, ImageWrapper } from "./Header";
const Main1 = () => {
  return (
    <MainLayout>
      <MainContents>
        <MainDescription>
          <DescriptionTit>매칭 시스템</DescriptionTit>
          <SubTit>
            설문으로 하는 <br /> 초간단 매칭
          </SubTit>
          <div>
            설문으로 매칭받는 미팅·소개팅!
            <br /> 사진 첨부 없이 이상형 설문만하고
            <br /> 가까운 이상형 유학생 매칭받기
          </div>
        </MainDescription>
        <ImageWrapper>
          <Image
            src={Demonstration1}
            width={561}
            height={674}
            alt="설문 이미지"
          />
        </ImageWrapper>
      </MainContents>
      <MainContentsReverse>
        <MainRightDescription>
          <SubTit>
            롱디는 그만! <br /> 동네 유학생만
          </SubTit>
          <div>
            롱디하느라 힘드셨죠? <br /> 같은 동네 유학생 매칭받고 <br />
            편하게 연애하세요.
          </div>
        </MainRightDescription>
        <ImageWrapper>
          <Image
            src={Demonstration5}
            width={561}
            height={674}
            alt="설문 이미지"
          />
        </ImageWrapper>
      </MainContentsReverse>
    </MainLayout>
  );
};

export const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  line-height: 32px;
  font-size: 24px;
  padding: 0 40px;
  ${media.medium} {
    font-size: 16px;
    line-height: 28px;
  }
  ${media.xsmall} {
    padding: 0 20px;
  }
`;

const Description = styled.article`
  padding-bottom: 28px;
`;

export const MainDescription = styled(Description)`
  margin-right: 90px;
  ${media.medium} {
    margin-right: 0px;
  }
`;
export const MainRightDescription = styled(Description)`
  margin-left: 90px;
  ${media.medium} {
    margin-left: 0px;
  }
`;

export const DescriptionTit = styled.div`
  color: #90d5c4;
  font-weight: 700;
  ${media.medium} {
    font-size: 16px;
  }
`;
export const SubTit = styled.div`
  margin: 8px 0 63px 0;
  font-size: 42px;
  line-height: 48px;
  font-weight: 800;
  ${media.medium} {
    margin: 8px 0 40px 0;
    font-size: 24px;
    line-height: 28px;
  }
`;
export const MainContents = styled(Contents)`
  padding: 60px 0;
  ${media.medium} {
    padding: 20px 0;
  }
`;
export const MainContentsReverse = styled(MainContents)`
  flex-direction: row-reverse;
`;

export default Main1;

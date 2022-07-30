import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {
  Demonstration1,
  Demonstration2,
  Demonstration3,
  Demonstration4,
  Demonstration5,
} from "../assets/img";
import { media } from "../styles/media";
import { Contents, Description, ImageWrapper } from "./Header";

function Main() {
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
        <ImageWrapper>
          <Image
            src={Demonstration3}
            width={274}
            height={521}
            alt="설문 이미지"
          />
        </ImageWrapper>
      </CenterContents>
      <MainContents>
        <MainDescription>
          <DescriptionTit>안전 시스템</DescriptionTit>
          <SubTit>
            자동 인증 시스템으로 <br /> 외딴썸에서 안전하게
          </SubTit>
          <div>
            ✅ 학교 이메일을 통한 본인 인증
            <br /> ✅ 24시간 불건전 유저 모니터링
            <br /> ✅ 비매너 유저 신고 기능
          </div>
        </MainDescription>
        <ImageWrapper>
          <Image
            src={Demonstration4}
            width={461}
            height={623}
            alt="설문 이미지"
          />
        </ImageWrapper>
      </MainContents>
      <MainContents>
        <MainDescription>
          <SubTit>
            매일 10시 <br /> 최적의 상대가 <br />
            소개됩니다.
          </SubTit>
          <div>
            메일을 통해 학교인증을 마치고
            <br /> 매칭 알고리즘이 선정한 회원
          </div>
        </MainDescription>
        <ImageWrapper>
          <Image
            src={Demonstration2}
            width={534}
            height={739}
            alt="설문 이미지"
          />
        </ImageWrapper>
      </MainContents>
    </MainLayout>
  );
}

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  line-height: 32px;
  font-size: 24px;
  padding: 0 40px;
  ${media.medium} {
    padding: 0 20px;
    font-size: 16px;
    line-height: 24px;
  }
  ${media.small} {
    padding: 0 12px;
  }
`;
const MainDescription = styled(Description)`
  margin-right: 90px;
  ${media.medium} {
    margin-right: 0px;
  }
`;
const MainRightDescription = styled(Description)`
  margin-left: 90px;
  ${media.medium} {
    margin-left: 0px;
  }
`;

const DescriptionTit = styled.div`
  color: #90d5c4;
  ${media.medium} {
    font-size: 16px;
  }
`;
const SubTit = styled.div`
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
const MainContents = styled(Contents)`
  padding-top: 120px;
`;
const MainContentsReverse = styled(MainContents)`
  flex-direction: row-reverse;
`;

const CenterContents = styled(MainContentsReverse)`
  text-align: center;
  width: 100%;
`;
export default Main;

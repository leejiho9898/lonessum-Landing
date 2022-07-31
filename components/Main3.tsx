import Image from "next/image";
import React from "react";
import { Demonstration2, Demonstration4 } from "../assets/img";
import { ImageWrapper } from "./Header";
import {
  DescriptionTit,
  MainContents,
  MainDescription,
  MainLayout,
  SubTit,
} from "./Main1";

function Main3() {
  return (
    <MainLayout>
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

export default Main3;

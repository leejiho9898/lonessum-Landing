import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Logo, ModelShort, StringLogo } from "../assets/img";
import { media } from "../styles/media";
import GoAppBox from "./GoAppBox";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <HeaderLayout>
      <HeaderTop />
      <Contents>
        <Description>
          <ImgToggleWrapper>
            <Image src={Logo} width={102} height={102} alt="외딴썸 로고" />
          </ImgToggleWrapper>
          <LogoWrapper>
            <Image
              src={StringLogo}
              width={213}
              height={71}
              alt="외딴썸 글자 로고"
            />
          </LogoWrapper>
          <ImageWrapper>
            유학생이 만든 국내 최초
            <br />
            유학생 미팅·소개팅 서비스
          </ImageWrapper>
          <DisapperBox>
            <GoAppBox />
          </DisapperBox>
        </Description>
        <OverLayWrapper>
          <Asd src={ModelShort} width={640} height={739} alt="모델 이미지" />
          <AppearBox>
            <GoAppBox />
          </AppearBox>
        </OverLayWrapper>
      </Contents>
    </HeaderLayout>
  );
}
const DisapperBox = styled.div`
  ${media.medium} {
    display: none;
  }
`;
const AppearBox = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 1.75em;
  ${media.medium} {
    display: block;
  }
`;
const Asd = styled(Image)`
  display: block;
  position: absolute;
  bottom: 0px;
`;
const OverLayWrapper = styled.div`
  position: relative;
  display: block;
`;
const HeaderLayout = styled.header`
  background-color: #4adac4;
  padding: 30px 30px 0 30px;
  color: #ffff;
  ${media.medium} {
    padding: 0 16px;
  }
`;

export const Contents = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${media.medium} {
    display: block;
  }
`;
export const Description = styled.article``;
export const ImageWrapper = styled.div`
  margin: 20px 4px;
  font-size: 24px;
  ${media.medium} {
    font-size: 20px;
  }
`;
export const LogoWrapper = styled(ImageWrapper)`
  ${media.medium} {
    width: 130px;
    height: 50px;
  }
`;
const ImgToggleWrapper = styled(ImageWrapper)`
  ${media.medium} {
    display: none;
  }
`;

export default Header;

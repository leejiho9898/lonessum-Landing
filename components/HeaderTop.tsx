import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Instagram, KakaoTalk } from "../assets/img";
import { media } from "../styles/media";

const HeaderTop = () => {
  return (
    <HeaderTopStyled>
      <IconLink href="https://www.instagram.com/lonessum_official/">
        <Image
          src={Instagram}
          width={60}
          height={60}
          alt="외딴썸 공식 인스타그램"
        />
      </IconLink>
      <IconLink href="http://pf.kakao.com/_XyXIxj/chat">
        <Image
          src={KakaoTalk}
          width={60}
          height={60}
          alt="외딴썸 공식 카카오톡"
        />
      </IconLink>
    </HeaderTopStyled>
  );
};

const HeaderTopStyled = styled.div`
  display: flex;
  justify-content: right;
  gap: 4px;
`;
const IconLink = styled.a`
  ${media.medium} {
    width: 30px;
  }
`;

export default HeaderTop;

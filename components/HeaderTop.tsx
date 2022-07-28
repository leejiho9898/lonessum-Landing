import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Instagram, KakaoTalk } from "../assets/img";

const HeaderTop = () => {
  return (
    <HeaderTopStyled>
      <a href="https://www.instagram.com/lonessum_official/">
        <Image
          src={Instagram}
          width={60}
          height={60}
          alt="외딴썸 공식 인스타그램"
        />
      </a>
      <a href="http://pf.kakao.com/_XUkxkb">
        <Image
          src={KakaoTalk}
          width={60}
          height={60}
          alt="외딴썸 공식 카카오톡"
        />
      </a>
    </HeaderTopStyled>
  );
};

const HeaderTopStyled = styled.div`
  display: flex;
  justify-content: right;
  gap: 4px;
`;

export default HeaderTop;

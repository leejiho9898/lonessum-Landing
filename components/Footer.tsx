import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterLayout>
      <FooterContents>
        <InfoBox>
          <InfoTit>회사정보</InfoTit>
          <InfoStlyed>회사 홈페이지</InfoStlyed>
          <InfoStlyed>채용</InfoStlyed>
        </InfoBox>
        <InfoBox>
          <InfoTit>소셜 미디어</InfoTit>
          <InfoStlyed>
            <a href="https://www.instagram.com/lonessum_official/">
              인스타그램
            </a>
          </InfoStlyed>
          <InfoStlyed>
            <a href="https://www.facebook.com/%EC%99%B8%EB%94%B4%EC%8D%B8-100114032761412/">
              페이스북
            </a>
          </InfoStlyed>
          <InfoStlyed>
            <a href="http://pf.kakao.com/_XUkxkb"> 카카오톡</a>
          </InfoStlyed>
          <InfoStlyed>
            <a href="https://www.linkedin.com/company/lonessum/">링크드인</a>
          </InfoStlyed>
        </InfoBox>
      </FooterContents>
      <FooterContents>
        <EtcInfos>
          외딴썸 서울특별시 은평구 증산로 387-1 6층 | 대표자: 이민석 <br />
          사업자등록번호: 248-40-00874 | 통신판매업신고번호: 제
          2022-서울은평-0980호 <br /> 문의전화: 010-2276-2776 | 문의메일:
          korea@lonessum.com <br />© 2022. 외딴썸, Co. All rights reserved.
        </EtcInfos>
      </FooterContents>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  background-color: #2c323a;
  color: #f0f0f0;
`;
const FooterContents = styled.div`
  margin: 0 auto;
  padding: 80px 10px;
  max-width: 1040px;
  width: 100%;
  display: flex;
`;
const InfoBox = styled.div`
  width: 150px;
  font-weight: 700;
  font-size: 20px;
`;
const InfoTit = styled.div`
  color: #abacb0;
  padding-bottom: 20px;
`;
const InfoStlyed = styled.div`
  padding: 8px 0;
`;
const EtcInfos = styled.div`
  color: #969696;
  line-height: 30px;
  font-size: 20px;
`;

export default Footer;

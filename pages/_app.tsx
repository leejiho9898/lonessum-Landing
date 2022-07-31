import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeadMeta from "../components/HeadMeta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMeta
        description="유학생을 위한 미팅/소개팅 서비스,
대표 유학생 만남 서비스 외딴썸! 더 이상 롱디하지 말고 동네 유학생과 매칭받아보세요:)"
        title="외딴썸 - 국내 최초 유학생 만남 서비스"
        url="intro.lonessum.com"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

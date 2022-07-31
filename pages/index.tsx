import type { NextPage } from "next";
import styled from "styled-components";
import Finish from "../components/Finish";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <Finish />
      <Footer />
    </HomeLayout>
  );
};

const HomeLayout = styled.div`
  width: 100%;
`;

export default Home;

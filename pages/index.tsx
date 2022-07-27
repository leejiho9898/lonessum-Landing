import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Finish from "../components/Finish";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Header />
      <Main />
      <Finish />
      <Footer />
    </HomeLayout>
  );
};

const HomeLayout = styled.div`
  width: 100%;
`;

export default Home;

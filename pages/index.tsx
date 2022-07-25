import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Finish from "../components/Finish";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Finish />
      <Footer />
    </div>
  );
};

export default Home;

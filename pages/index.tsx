import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />

      <footer></footer>
    </div>
  );
};

export default Home;

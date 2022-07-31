import Head from "next/head";
import { StaticImageData } from "next/image";
import React from "react";

interface HeadMetaProps {
  title: string;
  description: string;
  url: string;
}
function HeadMeta({ title, description, url }: HeadMetaProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:article:author" content="외딴썸" />
    </Head>
  );
}

export default HeadMeta;

import Head from "next/head";
import styled from "styled-components";

import Canvas from "../components/Home/Canvas/Canvas";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dalton Perkins</title>
        <meta name="description" content="Development portfolio for Dalton Perkins." />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3395D6" />
        <meta name="msapplication-TileColor" content="#e9e9e9" />
        <meta name="theme-color" content="#121212" />
      </Head>
      <Canvas />
    </Container>
  );
}

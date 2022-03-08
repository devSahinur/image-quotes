import Head from "next/head";
import Header from "../components/Header";
import RandomQuote from "../components/RandomQuote";
import { GithubForkBanner } from "react-github-fork-banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Quotes</title>
      </Head>

      <Header />
      <GithubForkBanner
        direction="right"
        size={98}
        animation="tail"
        customHref="https://github.com/devSahinur/image-quotes"
        bannerColor="#312E81"
        octoColor="rgb(224, 231, 255)"
      />
      <RandomQuote />
    </>
  );
}

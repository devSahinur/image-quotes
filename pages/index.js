import Head from "next/head";
import Header from "../components/Header";
import RandomQuote from "../components/RandomQuote";
import { GithubForkBanner } from 'react-github-fork-banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Quotes</title>
      </Head>
      
      <Header />
     
      <RandomQuote />
    </>
  );
}

import Head from "next/head";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Layout from "../components/Layout";
import ReadyCta from "../components/ReadyCta";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Open Source Zero-Trust</title>
        <meta name="description" content="Zero-trust Kubernetes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Features />
        <ReadyCta />
      </Layout>
    </div>
  );
}

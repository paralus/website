import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Cta from "../components/Cta";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="min-h-screen items-center">
      <Hero />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <Features />
        <Cta />
      </main>
    </Layout>
  );
}

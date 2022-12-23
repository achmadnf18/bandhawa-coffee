import About from "@/component/About/about";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import Layout from "@/layout";
import React from "react";

export default function AboutUs() {
  return (
    <Layout pageTitle="About">
      <BannerHeader title="About Us" />
      <About />
    </Layout>
  );
}

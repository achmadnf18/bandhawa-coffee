import About from "@/component/About/about";
import Hero from "../src/component/Hero";
import KeyFeatureComp from "../src/component/KeyFeatures";
import OurGalleryComp from "../src/component/OurGalerry";
// import OurTeamsComp from "../src/component/OurTeams";
import PhylosophyComp from "../src/component/Phylosophy";

import Layout from "../src/layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Hero />
      <About />
      <PhylosophyComp />
      <KeyFeatureComp />
      <OurGalleryComp />
      {/* <OurTeamsComp /> */}
    </Layout>
  );
}

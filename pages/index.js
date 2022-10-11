import BeansItem from "../src/component/Beans";
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
      <BeansItem />
      <PhylosophyComp />
      <KeyFeatureComp />
      <OurGalleryComp />
      {/* <OurTeamsComp /> */}
    </Layout>
  );
}

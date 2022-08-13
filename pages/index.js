import Contact from "../src/component/Contact";
import Hero from "../src/component/Hero";
import Product from "../src/component/Product";
// import Container from "../src/container";
import Layout from "../src/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Product />
      <Contact />
    </Layout>
  );
}

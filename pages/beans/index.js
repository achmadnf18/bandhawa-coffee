import Layout from "../../src/layout";
import Product from "../../src/component/Product";
import ListProduct from "../../src/data/listproduct.json";
import BannerHeader from "@/component/BannerHeader/BannerHeader";

export default function Beans() {
  return (
    <Layout pageTitle="Beans">
      <BannerHeader title="beans" />
      <Product getAllProductBeans={ListProduct} />
    </Layout>
  );
}

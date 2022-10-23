import Layout from "../../src/layout";
import Product from "../../src/component/Product";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import { useProducts } from "@/api/service/useProducts";

export default function Beans() {
  const service = useProducts();
  const doFetch = service.getListProduct();

  return (
    <Layout pageTitle="Beans">
      <BannerHeader title="beans" />
      <Product doFetch={doFetch} />
    </Layout>
  );
}

import { useRouter } from "next/router";
import Layout from "../../../src/layout";
// import SliderProduct from "../../../src/component/SliderProduct";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import roasted from "../../../src/data/beans.json";
import DetailBeans from "@/component/Beans/detail-bean";
export const BASE_API_IMAGE = process.env.api_image;

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const findDataById = roasted.roasted?.find((items) => items?.id == id);
  const detailProduct = {
    id: findDataById?.id,
    name: findDataById?.name,
    taste: findDataById?.taste,
    varital: findDataById?.varietal,
    process: findDataById?.process,
    elevation: findDataById?.elevation,
    foto: findDataById?.foto,
    description: findDataById?.description,
    region: findDataById?.region,
  };
  return (
    <Layout pageTitle={`Detail-Coffee`}>
      <BannerHeader title="beans" />
      <div className="container lg:mx-auto mx-5 ">
        <section title="detail-bean">
          <DetailBeans detailProduct={detailProduct} />
        </section>
      </div>
    </Layout>
  );
}

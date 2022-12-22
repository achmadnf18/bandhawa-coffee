import Layout from "../../src/layout";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import roasted from "../../src/data/beans.json";
import RoastedList from "@/component/Beans/Roasted/roasted-list";

export const BASE_API_IMAGE = process.env.api_image;
export default function RoastedBeans() {
  return (
    <Layout pageTitle="Coffee || Roasted Beans">
      <BannerHeader title="Roasted Bean" />
      <section className="container mx-auto py-10">
        <div className="grid grid-cols-12 gap-2  pb-4 place-content-center">
          {roasted.roasted.map((roasted, index) => {
            return (
              <RoastedList key={`roasted-bean-${index}`} roasted={roasted} />
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

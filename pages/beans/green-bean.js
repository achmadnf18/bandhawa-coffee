import Layout from "../../src/layout";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
// import green from "../../src/data/beans.json";
import GreenList from "@/component/Beans/Green/green-list";

export const BASE_API_IMAGE = process.env.api_image;
export default function GreenBeans() {
  return (
    <>
      <Layout pageTitle="Coffee || Green Beans">
        <BannerHeader title="green beans" />
        <section title="green-bean" className="container mx-auto py-10">
          {/* <div className="grid grid-cols-12 gap-2  pb-4 place-content-center">
            {green.green.map((green, index) => {
              return <GreenList key={`green-bean-${index}`} green={green} />;
            })}
           
          </div> */}
          <GreenList />
        </section>
      </Layout>
    </>
  );
}

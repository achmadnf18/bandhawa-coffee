import BannerHeader from "@/component/BannerHeader/BannerHeader";
import Layout from "@/layout";
import { useRouter } from "next/router";
import green from "../../../../src/data/beans.json";

export const BASE_API_IMAGE = process.env.api_image;

export default function DetailGreenBeans() {
  const router = useRouter();
  const { id } = router.query;
  const findDataById = green.green?.find((items) => items?.id == id);
  const detailProduct = {
    id: findDataById?.id,
    name: findDataById?.name,
    slug: findDataById?.slug,
    harvest: findDataById?.harvest,
    process: findDataById?.process,
    profile: findDataById?.profile,
    land: findDataById?.land,
    foto: findDataById?.foto,
  };

  console.log(detailProduct);
  return (
    <Layout pageTitle={`Detail-Coffee`}>
      <BannerHeader title="Detail Bean" />
      <div className="container lg:mx-auto mx-5 ">
        <section title="detail-bean">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10 ">
            {/* Left */}
            <div>
              <div>
                {/* Detail Name */}
                <h3 className="text-4xl  font-bold leading-none">
                  {detailProduct?.name}
                </h3>
                {/* Location */}
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.land}
                </p>
              </div>

              {/* Origin */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">
                  Harvest Estimation
                </h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.harvest}
                </p>
              </div>

              {/* Process */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Process</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.process}
                </p>
              </div>
              {/* Elevation */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">
                  Profile Suggestions
                </h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.profile}
                </p>
              </div>
              {/* Varieties */}
            </div>

            {/* Right */}
            <div className="flex items-center justify-center">
              <div className="sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]  bg-center ">
                <img
                  src={detailProduct?.foto}
                  alt="product.jpg"
                  className="rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

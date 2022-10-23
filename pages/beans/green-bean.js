import Layout from "../../src/layout";
import Link from "next/link";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import { useProducts } from "@/api/service/useProducts";
import Loading from "@/component/Loading";
export const BASE_API_IMAGE = process.env.api_image;

export default function GreenBeans() {
  const service = useProducts();
  const doFetch = service.getListProduct();
  const getList = doFetch?.data?.data;
  const getListByBeans = getList?.filter((row) => row?.beans === "Green");
  console.log(getListByBeans);
  return (
    <>
      <Layout pageTitle="Coffee || Green Beans">
        <BannerHeader title="green beans" />
        <section title="green-bean" className="container mx-auto py-10">
          <center>
            {" "}
            <a
              href="https://docs.google.com/document/d/1r0fxf3WD0s-D-5VP9fccmW2PxxtbRY1Z/edit?usp=sharing&ouid=109112680880859137819&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs bg-[#101B49] px-4 py-2 text-white rounded-full"
            >
              Download Offer Sheet
            </a>
          </center>
          <h4 className="lg:text-2xl md:text-xl text-lg font-semibold text-[#027879]">
            Indonesia
          </h4>
          {doFetch?.isFetching == true ? (
            <Loading color="text-gray-200" />
          ) : (
            getListByBeans?.map((row, index) => {
              return (
                <div className="grid grid-cols-12 gap-2  pb-4" key={index + 1}>
                  <div className="md:col-span-2 bg-contain md:block hidden bg-red-300 ">
                    <img
                      src={`${BASE_API_IMAGE}/${row?.image}`}
                      className="w-full "
                    />
                  </div>
                  <div className="md:col-span-3 col-span-12 relative mt-6">
                    <h5 className="text-xs font-bold uppercase leading-none">
                      {row?.name}
                    </h5>
                    <p className="text-xs leading-none text-[#027879]">
                      {row?.taste}
                    </p>
                  </div>
                  <div className="md:col-span-2 col-span-6  relative md:mt-6">
                    <h5 className="text-xs font-bold uppercase leading-none">
                      Process
                    </h5>
                    <p className="text-xs leading-none text-[#027879]">
                      {row?.process}
                    </p>
                  </div>
                  <div className="md:col-span-2 col-span-6 relative md:mt-6">
                    <h5 className="text-xs font-bold uppercase leading-none">
                      Bags Weight(Kg)
                    </h5>
                    <p className="text-xs leading-none text-[#027879]">
                      {row?.weight} kg
                    </p>
                  </div>
                  <div className="md:col-span-1 col-span-12 relative md:mt-6">
                    <h5 className="text-xs font-bold uppercase leading-none">
                      Available
                    </h5>
                    <p className="text-xs leading-none text-[#027879] ">
                      {row?.available}
                    </p>
                  </div>
                  <div className="md:col-span-2 col-span-12 md:ml-4 realative md:mt-6">
                    <Link href={`/detail/${row?.id}/${row?.slug}`} passHref>
                      <button className="text-xs bg-[#101B49] px-4 py-2 md:w-28 w-full text-white rounded-full">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </section>
      </Layout>
    </>
  );
}

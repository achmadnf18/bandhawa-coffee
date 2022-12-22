import { useProducts } from "@/api/service/useProducts";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import SliderProduct from "@/component/SliderProduct";
import Layout from "@/layout";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export const BASE_API_IMAGE = process.env.api_image;

export default function DetailGreenBeans() {
  const router = useRouter();
  const idProduct = router?.query?.id;
  const service = useProducts();
  const doFetch = service?.getListProduct();
  const getList = doFetch?.data?.data;
  const filterByBeans = getList?.filter((row) => row?.beans === "Green");
  const getDataById = filterByBeans?.find((item) => item?.id == idProduct);
  const detailProduct = {
    id: getDataById?.id,
    name: getDataById?.name,
    slug: getDataById?.slug,
    taste: getDataById?.taste,
    process: getDataById?.process,
    weight: getDataById?.weight,
    available: getDataById?.available,
    score: getDataById?.score,
    variety: getDataById?.variety,
    image: getDataById?.image,
  };
  const subject = `Request Produk ${detailProduct?.name}`;
  return (
    <Layout pageTitle={`Green Bean Detail`}>
      <BannerHeader title="beans" />
      <section title="detail-green-bean">
        <div className="container mx-auto md:px-4 px-10 pt-20 pb-10">
          <Link href="/beans/green-bean" passHref>
            <button className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
              <ChevronLeftIcon className="w-4 h-4 text-white " />
              Back
            </button>
          </Link>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10 ">
            <div>
              <div>
                {/* Detail Name */}
                <h3 className="text-4xl uppercase font-bold leading-none">
                  {detailProduct?.name}
                </h3>
                {/* Location */}
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.taste}
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`mailto:yuliana.astuti@outlook.com?subject=${subject}`}
                  className="text-xs bg-[#101B49] gap-3 inline-flex px-10 py-2 rounded-full items-center justify-between text-white"
                >
                  Contact Us !
                </a>
              </div>
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Variety</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.variety}
                </p>
              </div>
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Score</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.score}
                </p>
              </div>
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Weight</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.weight} kg
                </p>
              </div>
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Process</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.process}
                </p>
              </div>
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Available</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {detailProduct.available}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className=" ">
                <img
                  src={`${BASE_API_IMAGE}/${detailProduct?.image}`}
                  alt="product.jpg"
                  className="object-contain sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]"
                />
              </div>
            </div>
          </div>
          <SliderProduct />
        </div>
      </section>
    </Layout>
  );
}

// Ketentuan Upload / Update
// - Nama Produk / Coffee tidak bisa sama (Jika ada yang sama tolong di tambahkan nama processnya) Cth : Aceh Gayo Wine , Aceh Gayo Natural
// - File Size Maximal 1 Mb
// - Jika available maka pilih Get Inquity
// - Jika field kosong maka isi dengan tanda " - " atau pilih " - "
// - Score harus bilangan bulat tidak boleh ada koma

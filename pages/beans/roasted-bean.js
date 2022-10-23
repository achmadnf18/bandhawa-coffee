// import { useState, useEffect } from "react";
import Layout from "../../src/layout";

import Link from "next/link";
// import ReactPaginate from "react-paginate";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
import { useProducts } from "@/api/service/useProducts";
import Loading from "@/component/Loading";
export const BASE_API_IMAGE = process.env.api_image;

export default function RoastedBeans() {
  const service = useProducts();
  const doFetch = service.getListProduct();
  const getList = doFetch?.data?.data;

  const getListByBeans = getList?.filter((row) => row?.beans === "Roasted");

  // const [productList, setProductList] = useState(getListByBeans);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 10;

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setProductList(getListByBeans?.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(getListByBeans?.length / itemsPerPage));
  // }, [getListByBeans, itemOffset, itemsPerPage]);
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % getListByBeans?.length;
  //   setItemOffset(newOffset);
  // };
  return (
    <>
      <Layout pageTitle="Coffee || Roasted Beans">
        <BannerHeader title="Roasted Bean" />
        <section className="container mx-auto py-10">
          {doFetch?.isFetching == true ? (
            <Loading color="text-gray-200" />
          ) : (
            getListByBeans?.map((row, index) => {
              return (
                <>
                  <div
                    className="grid grid-cols-12 gap-2  pb-4"
                    key={index + 1}
                    id={row?.id}
                  >
                    <div className="bg-contain md:block hidden ">
                      <div className="">
                        <img
                          src={`${BASE_API_IMAGE}/${row?.image}`}
                          className=" max-w-20 object-contain lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]"
                          // layout="fill"
                          // objectFit="contain"
                        />
                      </div>
                      {/* <img src="/assets/beans/beans.png" className=" max-w-20" /> */}
                    </div>
                    <div className="md:col-span-3 col-span-12 realative mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        {row?.name}
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.taste}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-6  realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Origin
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.description}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-6 realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Process
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.process}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-12 realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Varieties
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.varieties}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-12 md:ml-4 realative md:mt-6">
                      <Link href={`/beans/${row?.id}/${row?.slug}`} passHref>
                        <button className="text-xs bg-[#101B49] px-4 py-2 md:w-28 w-full text-white rounded-full">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          )}
          {/* <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-end gap-3"
            disabledClassName="hidden"
            activeLinkClassName="activePagination bg-red-300 px-3 py-1  rounded-md  "
          /> */}
        </section>
      </Layout>
    </>
  );
}

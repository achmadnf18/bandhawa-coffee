import { useState, useEffect } from "react";
import Layout from "../../src/layout";
import Green from "../../src/data/new-green.json";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import BannerHeader from "@/component/BannerHeader/BannerHeader";
export default function GreenBeans() {
  const [productList, setProductList] = useState(Green);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProductList(Green?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Green?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Green]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Green?.length;
    setItemOffset(newOffset);
  };

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
          {productList?.length == 0
            ? "Loading..."
            : productList?.map((row, index) => {
                return (
                  <div
                    className="grid grid-cols-12 gap-2  pb-4"
                    key={index + 1}
                  >
                    <div className="md:col-span-2 bg-contain md:block hidden bg-red-300 ">
                      <img src={row?.image} className="w-full " />
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
                        Get Inquiry
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
              })}
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-end gap-3"
            disabledClassName="hidden"
            activeLinkClassName="activePagination bg-red-300 px-3 py-1  rounded-md  "
          />
        </section>
      </Layout>
    </>
  );
}

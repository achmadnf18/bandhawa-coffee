import Link from "next/link";
import React from "react";
export const BASE_API_IMAGE = process.env.api_image;
export default function ListProduct({ productList }) {
  return (
    <>
      {productList?.map((row, index) => {
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
      })}
    </>
  );
}

// grid grid-cols-12 gap-3 py-2
{
  /* <div className="md:col-span-3 col-span-12 md:font-normal font-medium text-lg  ">
              {row?.name}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
              {row?.description}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
              {row?.type}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm">
              <img src={row?.foto} className="w-[100px]" />
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm">
              {row?.varieties}
            </div>
            <div className="md:col-span-1 col-span-12 flex items-center  justify-center ">
              <Link href={`/beans/${row?.id}/${row?.slug}`} passHref>
                <button className=" bg-green-500 md:px-2 py-1.5 md:w-28 w-full rounded-lg text-white uppercase">
                  details
                </button>
              </Link>
            </div> */
}

import Link from "next/link";
import React from "react";

export default function ListProduct({ productList }) {
  return (
    <>
      {productList.map((row, i) => {
        return (
          <div
            id={row?.id}
            key={i + 1}
            className="grid grid-cols-12 gap-3 py-2  "
          >
            <div className="md:col-span-3 col-span-12 md:font-normal font-medium text-lg  ">
              {row?.name}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
              {row?.description}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
              {row?.type}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
              {row?.process}
            </div>
            <div className="md:col-span-2 col-span-6 md:text-lg text-sm">
              {row?.varieties}
            </div>
            <div className="md:col-span-1 col-span-12 flex items-center  justify-center ">
              <Link href={`/product/1/gayo-semi-wash`} passHref>
                <button className=" bg-green-500 md:px-2 py-1.5 md:w-28 w-full rounded-lg text-white uppercase">
                  details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

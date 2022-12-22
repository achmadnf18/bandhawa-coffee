import Link from "next/link";
import React from "react";
import { Fragment } from "react";

export default function RoastedList({ roasted }) {
  return (
    <Fragment>
      <div className="bg-contain md:block hidden ">
        <div className="">
          {/* <img
    src={`${BASE_API_IMAGE}/${row?.image}`}
    className=" max-w-20 object-contain lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]"
  /> */}
          <img
            src={roasted?.foto}
            className="w-full h-full max-w-20"
            loading="lazy"
          />
        </div>
        {/* <img src="/assets/beans/beans.png" className=" max-w-20" /> */}
      </div>
      <div className="md:col-span-3 col-span-12 relative ">
        <h5 className="text-sm font-bold uppercase">{roasted?.name}</h5>
        <p className="text-sm text-[#027879]">{roasted?.taste}</p>
      </div>
      <div className="md:col-span-2 col-span-6  relative md:">
        <h5 className="text-sm font-bold uppercase leading-none">
          Description
        </h5>
        <p className="text-sm  text-[#027879]">{roasted?.description}</p>
      </div>
      <div className="md:col-span-2 col-span-6 relative md:">
        <h5 className="text-sm font-bold uppercase leading-none">Process</h5>
        <p className="text-sm leading-none text-[#027879]">
          {roasted?.process}
        </p>
      </div>
      <div className="md:col-span-2 col-span-12 relative md:">
        <h5 className="text-sm font-bold uppercase leading-none">Varietal</h5>
        <p className="text-sm  text-[#027879]">{roasted.varietal}</p>
      </div>
      <div className="md:col-span-2 col-span-12 md:ml-4 relative md:">
        <Link href={`/beans/${roasted.id}/${roasted.slug}`} passHref>
          <button className="text-xs bg-[#101B49] px-4 py-2 md:w-28 w-full text-white rounded-full">
            Details
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

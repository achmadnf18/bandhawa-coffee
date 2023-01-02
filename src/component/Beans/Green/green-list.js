import Link from "next/link";
import { Fragment } from "react";

export default function GreenList({ green }) {
  return (
    <Fragment>
      <div className="md:col-span-3 col-span-12 relative ">
        <h5 className="text-sm font-bold ">{green?.name}</h5>
        <p className="text-sm text-[#027879]">{green?.land}</p>
      </div>
      <div className="md:col-span-2 col-span-6  relative md:">
        <h5 className="text-sm font-bold  leading-none">Harvest Estimation</h5>
        <p className="text-sm  text-[#027879]">{green?.harvest}</p>
      </div>
      <div className="md:col-span-2 col-span-6 relative md:">
        <h5 className="text-sm font-bold  leading-none">Process</h5>
        <p className="text-sm leading-none text-[#027879]">{green?.process}</p>
      </div>
      <div className="md:col-span-2 col-span-12 relative md:">
        <h5 className="text-sm font-bold  leading-none">Profile Suggestions</h5>
        <p className="text-sm  text-[#027879]">{green.profile}</p>
      </div>
      <div className="md:col-span-2 col-span-12 md:ml-4 relative md:">
        <Link href={`/beans/green-bean/${green.id}/${green.slug}`} passHref>
          <button className="text-xs bg-[#101B49] px-4 py-2 md:w-28 w-full text-white rounded-full">
            Details
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

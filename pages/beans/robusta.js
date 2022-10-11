import React from "react";
import Layout from "../../src/layout";

import Link from "next/link";
import Robusta from "../../src/data/robusta.json";

export default function robusta() {
  return (
    <>
      <Layout pageTitle="Coffee || Robusta">
        <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img cursor-pointer">
          <div className="bg-black/70 w-full">
            <div className="flex items-center justify-center align-middle py-44 ">
              <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
                ROBUSTA
              </h3>
            </div>
          </div>
        </div>
        {/* List Arabica */}
        <section className=" container mx-auto py-10">
          {/* <h2 className="text-xl font-light italic text-center pb-14 ">
            We Process Robusta coffee beans from the harvests of our forested
            farmers, into array of varriants of distinctive flavors
          </h2> */}
          <>
            {Robusta.map((row, i) => {
              return (
                <>
                  <div className="grid grid-cols-12 gap-2  pb-4" key={i + 1}>
                    <div className="bg-contain md:block hidden ">
                      <div className="">
                        <img
                          src={row?.foto}
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
        </section>
      </Layout>
    </>
  );
}

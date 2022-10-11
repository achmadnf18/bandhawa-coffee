import Link from "next/link";
import React from "react";
import Layout from "../src/layout/index";

export default function Type() {
  return (
    <Layout pageTitle="Type">
      <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img cursor-pointer">
        <div className="bg-black/70 w-full">
          <div className="flex items-center justify-center align-middle py-44 ">
            <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
              Type of Beans
            </h3>
          </div>
        </div>
      </div>
      {/* List Arabica */}
      <section className="container mx-auto py-40">
        {/* <h2 className="text-xl font-light italic text-center pb-14 ">
          We Process Arabica coffee beans from the harvests of our forested
          farmers, into array of varriants of distinctive flavors
        </h2> */}
        <div className="flex items-center justify-center gap-5">
          <Link href="/beans/green-bean" passHref>
            <p className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white cursor-pointer hover:scale-105">
              Green Beans
            </p>
          </Link>
          <Link href="/beans/roasted-bean" passHref>
            <p className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white cursor-pointer hover:scale-105">
              Roasted Beans
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

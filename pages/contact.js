import React from "react";
import Layout from "../src/layout";

export default function contact() {
  return (
    <Layout pageTitle="Contact Us">
      <div className="  flex items-center justify-center bg-fixed bg-center bg-cover  bg-no-repeat contact-img cursor-pointer">
        <div className=" mt-40">
          <div className="flex items-center justify-center align-middle py-44 ">
            <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[1.3rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
              Contact Us
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

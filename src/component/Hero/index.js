import React from "react";
import HeroText from "./HeroText";
export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="  hero-image sm:bg-center bg-top bg-cover  bg-no-repeat pt-10 pb-44   ">
        <div>
          <HeroText />
        </div>
        <center>
          {/* <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://drive.google.com/file/d/1PD7lZDrrD76MxuMolPvTxTHPxYOWKVo1/view?usp=sharing"
            className="text-center font-semibold shadow text-lg px-6 py-2  bg-transparent hover:bg-white border-white text-white hover:text-[#101B49] border-4 rounded-full hover:scale-105 transform transition-all duration-100 ease-in-out uppercase"
          >
            Download Catalogue
          </a> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:salesmarketing@cmsi-id.com"
            className="text-center font-semibold shadow text-lg px-6 py-2  bg-transparent hover:bg-white border-white text-white hover:text-[#101B49] border-4 rounded-full hover:scale-105 transform transition-all duration-100 ease-in-out uppercase"
          >
            Contact Us
          </a>
        </center>
      </section>
    </>
  );
}

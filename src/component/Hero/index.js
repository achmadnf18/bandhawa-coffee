import React from "react";
import HeroText from "./HeroText";
export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className="  hero-image sm:bg-center bg-top bg-cover  bg-no-repeat pt-10 pb-44   ">
        <div>
          <HeroText />
          {/* <div className="flex items-center justify-center gap-10 relative ">
            <button className="uppercase px-6 py-2 rounded-full border border-white bg-transparent hover:bg-white text-white hover:text-black">
              {" "}
              Watch Us
            </button>
            <button className="uppercase px-6 py-2 rounded-full border border-white bg-transparent hover:bg-white text-white hover:text-black">
              {" "}
              Our Catalogue
            </button>
          </div> */}
        </div>
        {/* <div className="container mx-auto text-center ">
          <div className="flex items-center lg:justify-between justify-center lg:gap-0 sm:gap-14 gap-4 mx-2">
            <img
              src="/assets/left-right-paralax.png"
              className="lg:w-[100px] md:w-[60px] sm:w-[40px] w-[30px]"
            />
            <img 
              src="/assets/paralax.png"
              className="lg:w-[700px] md:w-[500px] sm:w-[350px] w-[260px] md:mb-20 sm:mb-14 mb-10 "
            />
            <img
              src="/assets/left-right-paralax.png"
              className="lg:w-[100px] md:w-[60px] sm:w-[40px] w-[30px] "
            />
          </div>
        </div> */}
        <center>
          <button className="text-center font-semibold shadow text-lg px-6 py-2  bg-transparent hover:bg-white border-white text-white hover:text-[#101B49] border-4 rounded-full hover:scale-105 transform transition-all duration-100 ease-in-out uppercase">
            Download Catalogue
          </button>
        </center>
      </section>
    </>
  );
}

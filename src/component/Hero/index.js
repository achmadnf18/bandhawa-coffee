import React from "react";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div
        className="h-screen flex items-center justify-center mb-12 bg-fixed bg-center bg-cover custom-img"
        id="about"
      >
        {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 ">
          <div className=" py-44">
            <div>
              <h1 className="text-[#007979] md:text-5xl text-3xl font-semibold">
                Bandhawa
              </h1>
              <h1 className="text-[#101B49] md:text-5xl text-3xl font-semibold">
                Coffee
              </h1>
              <p className="font-medium md:text-xl text-lg pt-2">
                We Process Robusta and Arabica coffee beans from the harvests of
                our forested farmers, into array of varriants of distinctive
                flavors
              </p>
            </div>
          </div>
          <div className="py-36 pl-20">
            <img src="/assets/logo.png" />
          </div>
        </div> */}
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 lg:bottom-0 md:-bottom-1 -bottom-1 bg-black/70 z-[2]" />
        <HeroText />
      </div>
    </>
  );
}

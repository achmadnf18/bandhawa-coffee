import React from "react";

export default function About() {
  return (
    <section title="about-bandhawa-coffee">
      <div className="lg:grid lg:grid-cols-2 place-items-center">
        <div className="p-10">
          <h1 className="lg:text-5xl text-3xl text-[#191A4E]">About Us</h1>
          <h2 className="lg:text-lg text-sm text-justify place-items-center">
            Dear Valued Customer / Business Partner we are honored to present
            our company PT. Bandhawa Jaya Agrikultura to you. PT Bandhawa Jaya
            Agrikultura was established with high values. Mainly, to introduce
            Indonesian Coffee beans and sure to help our farmers become more
            valueable. Indonesia has rich natural resources one of that
            Indonesia has is coffee, that spread along Indonesia territory
          </h2>
          <h2 className="lg:hidden block lg:text-lg text-sm text-justify place-items-center">
            PT. Bandhawa Jaya Agrikultura will provide you many kinds of coffee
            that you need, like Arabica and Robusta beans with many kinds of
            process from natural process, full washed, semi washed, also special
            fermented process. We have collaborated with farmers from Sumatera
            Island, Java Island, Bali Island, Flores also Papua
          </h2>
        </div>
        <div className="lg:block hidden">
          <img
            src="/assets/about/about-image-1.jpg"
            loading="lazy"
            className="h-full"
          />
        </div>
      </div>
      <div className="lg:grid hidden lg:grid-cols-2 place-items-center">
        <div className="lg:block hidden">
          <img
            src="/assets/about/about-image-2.jpg"
            loading="lazy"
            className="h-full"
          />
        </div>
        <div className="p-10">
          <h2 className="lg:text-lg text-sm text-justify place-items-center">
            PT. Bandhawa Jaya Agrikultura will provide you many kinds of coffee
            that you need, like Arabica and Robusta beans with many kinds of
            process from natural process, full washed, semi washed, also special
            fermented process. We have collaborated with farmers from Sumatera
            Island, Java Island, Bali Island, Flores also Papua
          </h2>
        </div>
      </div>
    </section>
  );
}

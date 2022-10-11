import React from "react";

export default function KeyFeatureComp() {
  return (
    <section className="py-20 lg:mx-20 sm:mx-14 mx-0">
      <div className="container mx-auto">
        <h2 className="md:text-2xl text-xl font-medium uppercase text-[#101B49] tracking-[0.5rem] text-center">
          Key Features
        </h2>
        <div className="sm:mx-0 mx-6">
          {/* 1 */}
          <div data-aos="fade-right" className="flex items-center gap-4 py-6 ">
            <div className="sm:block hidden ">
              <img src="/assets/key-features/mangkok.svg" />
            </div>
            <div className="sm:pl-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3rem]">
                Variant Flavours
              </h4>
              <p className="text-xs italic font-medium">
                We process Robusta and Arabica coffee beans from the harvests of
                our fostered farmers, into array of variants of distinctive
                flavours.{" "}
              </p>
            </div>
          </div>
          {/* 2 */}
          <div data-aos="fade-left" className="flex items-center gap-5 py-6 ">
            <div className="sm:block hidden ">
              <img src="/assets/key-features/award.svg" />
            </div>
            <div className="sm:pl-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3rem]">
                BEST QUALITY COFFEE BEANS{" "}
              </h4>
              <p className="text-xs italic font-medium">
                We provide guidance to coffee farmers in various leading coffee
                plantation areas in Indonesia as the main supplier to ensure the
                availability of our coffee beans with the quality that we
                specify.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div data-aos="fade-right" className="flex items-center gap-6 py-6">
            <div className="sm:block hidden">
              <img src="/assets/key-features/chart-line.svg" />
            </div>
            <div className="sm:pl-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3rem]">
                FARMER’S PARTNER
              </h4>
              <p className="text-xs italic font-medium">
                Bandhawa Coffee is proud to become a partner of coffee farmers,
                in which our purchase price to farmers follows the standard
                rules set by the Government through relevant agencies.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div data-aos="fade-left" className="flex items-center gap-8 py-6">
            <div className="sm:block hidden">
              <img src="/assets/key-features/digging.svg" />
            </div>
            <div className="sm:pl-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3rem]">
                COACHING
              </h4>
              <p className="text-xs italic font-medium">
                The coaching for coffee farmers is conducted from upstream to
                downstream, starting from how to plant good seeds, take care of
                coffee trees, harvest, process and store the crops for further
                supply to our coffee bean warehouse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

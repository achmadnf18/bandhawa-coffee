import React from "react";

export default function OurTeamsComp() {
  return (
    <section className="md:py-20 py-2">
      <div className="container mx-auto">
        <h3 className="text-center tracking-[0.5rem] font-medium text-2xl uppercase text-[#101B49] ">
          Our Teams
        </h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 pt-5 ">
          {/* 1 */}
          <div data-aos="zoom-in" className="sm:pb-0 pb-4 text-center">
            <div className="flex items-center justify-center">
              <img
                src="/assets/team/team.png"
                className="rounded-full w-[174px] h-[174px]"
              />
            </div>
            <div className="pt-7">
              <h4 className="text-lg font-light leading-tight ">Julio</h4>
              <h3 className="text-lg font-semibold italic text-[#027879] leading-tight">
                Founder
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/assets/team/envelope.svg"
                  className="text-[#027879] w-8 h-8"
                />
              </div>
            </div>
          </div>
          {/* 2*/}
          <div data-aos="zoom-in" className="sm:pb-0 pb-4 text-center">
            <div className="flex items-center justify-center">
              <img
                src="/assets/team/team.png"
                className="rounded-full w-[174px] h-[174px]"
              />
            </div>
            <div className="pt-7">
              <h4 className="text-lg font-light leading-tight ">Julio</h4>
              <h3 className="text-lg font-semibold italic text-[#027879] leading-tight">
                Founder
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/assets/team/envelope.svg"
                  className="text-[#027879] w-8 h-8"
                />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div data-aos="zoom-in" className="sm:pb-0 pb-4 text-center">
            <div className="flex items-center justify-center">
              <img
                src="/assets/team/team.png"
                className="rounded-full w-[174px] h-[174px]"
              />
            </div>
            <div className="pt-7">
              <h4 className="text-lg font-light leading-tight ">Julio</h4>
              <h3 className="text-lg font-semibold italic text-[#027879] leading-tight">
                Founder
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/assets/team/envelope.svg"
                  className="text-[#027879] w-8 h-8"
                />
              </div>

              {/* <p className="text-xs font-light md:mx-10 sm:mx-36 leading-tight mx-24 ">
                Our faith is the substance of our future. There is no big
                success without big sacrifice.
              </p> */}
            </div>
          </div>
          {/* 4 */}
          <div data-aos="zoom-in" className="sm:pb-0 pb-4 text-center">
            <div className="flex items-center justify-center">
              <img
                src="/assets/team/team.png"
                className="rounded-full w-[174px] h-[174px]"
              />
            </div>
            <div className="pt-7">
              <h4 className="text-lg font-light leading-tight ">Julio</h4>
              <h3 className="text-lg font-semibold italic text-[#027879] leading-tight">
                Founder
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/assets/team/envelope.svg"
                  className="text-[#027879] w-8 h-8"
                />
              </div>

              {/* <p className="text-xs font-light md:mx-10 sm:mx-36 leading-tight mx-24 ">
                Our faith is the substance of our future. There is no big
                success without big sacrifice.
              </p> */}
            </div>
          </div>
        </div>
        <div className="pt-14">
          <p className="text-sm italic font-light">
            If you want to feel the sensation of a true coffee taste, being a
            true Robusta coffee connoisseur or being a part of millions of
            Arabica connoisseurs worldwide, then Bandhawa Coffee will be the
            answer for most suitable coffee choice. Contact us for more
            information, <span className="text-[#007979]">click here.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

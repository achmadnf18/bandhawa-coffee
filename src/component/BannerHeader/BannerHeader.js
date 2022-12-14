import React from "react";

export default function BannerHeader({ title }) {
  return (
    <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img">
      <div className="bg-[#265A3F] w-full">
        <div className="flex items-center justify-center align-middle py-40 ">
          <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center font-semibold leading-none drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

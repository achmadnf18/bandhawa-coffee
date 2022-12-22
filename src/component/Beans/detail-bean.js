import React from "react";

export default function DetailBeans({ detailProduct }) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10 ">
      {/* Left */}
      <div>
        <div>
          {/* Detail Name */}
          <h3 className="text-4xl uppercase font-bold leading-none">
            {detailProduct?.name}
          </h3>
          {/* Location */}
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.region}
          </p>
        </div>

        {/* Origin */}
        <div className="my-12">
          <h4 className="text-lg leading-none font-bold">Description</h4>
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.description}
          </p>
        </div>
        {/* Type */}
        <div className="my-12">
          <h4 className="text-lg leading-none font-bold">Taste</h4>
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.taste}
          </p>
        </div>

        {/* Process */}
        <div className="my-12">
          <h4 className="text-lg leading-none font-bold">Process</h4>
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.process}
          </p>
        </div>
        {/* Elevation */}
        <div className="my-12">
          <h4 className="text-lg leading-none font-bold">Elevation</h4>
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.elevation}
          </p>
        </div>
        {/* Varieties */}
        <div className="my-12">
          <h4 className="text-lg leading-none font-bold">Varietal</h4>
          <p className="text-lg leading-none font-medium italic text-[#027879]">
            {detailProduct.varital}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center">
        <div className=" ">
          <img
            src={detailProduct?.foto}
            alt="product.jpg"
            className="object-contain sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

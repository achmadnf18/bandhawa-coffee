import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 mt-20 ">
      <div className="container mx-auto py-7">
        <h2 className="lg:text-4xl sm:text-2xl text-xl font-semibold text-center">
          Contact Us
        </h2>
        <div className="py-10 md:flex md:items-center md:justify-between md:mx-24 mx-0">
          <div className="text-center">
            <PhoneIcon className="w-10 h-10 text-gray-400 mx-auto " />
            <h6 className="uppercase text-lg font-medium">phone</h6>
            <p className="text-[#757575]">+62 82260903317</p>
          </div>
          <div className="text-center">
            <PhoneIcon className="w-10 h-10 text-gray-400 mx-auto " />
            <h6 className="uppercase text-lg font-medium">phone</h6>
            <p className="text-[#757575]">+62 82260903317</p>
          </div>
          <div className="text-center">
            <PhoneIcon className="w-10 h-10 text-gray-400 mx-auto " />
            <h6 className="uppercase text-lg font-medium">phone</h6>
            <p className="text-[#757575]">+62 82260903317</p>
          </div>
        </div>
      </div>
    </section>
  );
}

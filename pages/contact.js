import BannerHeader from "@/component/BannerHeader/BannerHeader";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../src/layout";

export default function contact() {
  const instagram = <FontAwesomeIcon icon={faInstagram} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  return (
    <Layout pageTitle="Contact Us">
      <BannerHeader title="Contact Us" />
      <div className=" mx-10 my-24">
        <div className="lg:grid lg:grid-cols-3 flex flex-col items-center  lg:gap-3 gap-10 xl:mx-40 lg:mx-20 ">
          <div className="flex flex-col items-center justify-center lg:border-r lg:border-r-[#265A3F]  border-dashed">
            <div className="w-20 h-20 mb-4"> {phone}</div>
            <h1 className="lg:text-3xl text-xl">Phone</h1>
            <h2 className="lg:text-lg text-sm">+62 852-9010-0080</h2>
          </div>
          <div className="flex flex-col items-center justify-center lg:border-r lg:border-r-[#265A3F]  border-dashed">
            <div className="w-20 h-20 mb-4"> {email}</div>
            <h1 className="lg:text-3xl text-xl">Email</h1>
            <h2 className="lg:text-lg text-sm">bandhawa@bja-id.com</h2>
          </div>
          <div className="flex flex-col items-center justify-center ">
            <div className="w-20 h-20 mb-4"> {instagram}</div>
            <h1 className="lg:text-3xl text-xl">Instagram</h1>
            <h2 className="lg:text-lg text-sm">bandhawa_coffee</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

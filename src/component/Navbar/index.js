import Link from "next/link";
import { useState, useEffect } from "react";

import Nav from "./Nav";

export default function Navbar() {
  const [scrollEffect, setScrollEffect] = useState(false);

  useEffect(() => {
    // Change background scroll
    const changeBackgroundScroll = () => {
      if (window.scrollY >= 90) {
        setScrollEffect(true);
      } else {
        setScrollEffect(false);
      }
    };

    window.addEventListener("scroll", changeBackgroundScroll);
  }, []);

  return (
    // <header className="bg-red-300">
    //   <nav className="container flex items-center py-4 mt-4 sm:mt-3">
    //     <div className="py-1">
    //       <img
    //         src="/assets/logo.png"
    //         alt="logo"
    //         className="w-[210px] h-[100px]"
    //       />
    //     </div>
    //     <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-sm">
    //       <li>About Us</li>
    //       <li>Product</li>
    //       <li>Contact Us</li>
    //     </ul>
    //   </nav>
    // </header>
    <>
      <nav
        className={
          scrollEffect
            ? "fixed  top-0 w-full bg-white z-[4] text-black duration-100 transition-opacity"
            : "fixed  top-0 w-full z-[4] text-white duration-100 transition-opacity"
        }
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-5">
            <Link href="/" passHref>
              {/* <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="w-[190px] h-[90px] cursor-pointer"
                /> */}
              Logo
            </Link>
            <Nav />
          </div>
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Nav from "./Nav";

export default function Navbar() {
  const [scrollEffect, setScrollEffect] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // Change background scroll
  useEffect(() => {
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
      <header>
        <nav
          className={
            scrollEffect
              ? "fixed  top-0 w-full bg-white z-[4] text-black duration-100 transition-all ease-in shadow bg-opacity-90"
              : "fixed  top-0 w-full z-[4] sm:bg-transparent bg-white sm:text-white text-black duration-100 transition-all ease-in "
          }
        >
          <div className="container mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center py-4 px-5">
              <div className="flex justify-between items-center">
                <Link href="/" passHref>
                  {/* <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="w-[190px] h-[90px] cursor-pointer"
                  onClick={() => scroll.scrollToTop()}
                /> */}
                  Your Logo
                </Link>
                {/* Mobile Menu*/}
                <div
                  className="sm:hidden block cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>

              <Nav openMenu={openMenu} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

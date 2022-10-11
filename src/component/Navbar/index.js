import Link from "next/link";
import { useState, useEffect } from "react";
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
              ? "fixed  top-0 w-full bg-white z-20 text-black duration-100 transition-all  ease-in shadow sm:bg-opacity-50"
              : "fixed  top-0 w-full z-20 sm:bg-transparent bg-white sm:text-white  duration-100 transition-all ease-in "
          }
        >
          {/* sm:flex sm:justify-between sm:items-center py-4 px-5 */}
          <div className="container mx-auto">
            <div className="md:flex md:items-center md:justify-between py-1 px-5">
              <div className="flex justify-between items-center ">
                <Link href="/" passHref>
                  <div>
                    {scrollEffect ? (
                      <img
                        src="/assets/logo-after.png"
                        alt="logo"
                        className="sm:block hidden w-[50px] h-[60px] cursor-pointer"
                      />
                    ) : (
                      <img
                        src="/assets/logo-before.png"
                        alt="logo"
                        className="sm:block hidden  w-[50px] h-[60px] cursor-pointer"
                      />
                    )}
                    <img
                      src="/assets/logo-after.png"
                      alt="logo"
                      className="sm:hidden block w-[50px] h-[60px] cursor-pointer"
                    />
                  </div>
                  {/* <h2 className="text-white">Your Logo</h2> */}
                </Link>
                {/* Mobile Menu*/}
                <div
                  className="sm:hidden block cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="md:white none"
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
                {/* MD: Menu */}
                <div
                  className="md:hidden  sm:block hidden cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="md:white none"
                    viewBox="0 0 24 24"
                    stroke="white"
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

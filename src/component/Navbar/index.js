import { useState, useEffect } from "react";
import NavigationItemMobile from "./navigation-item-mobile";
import NavigationLeft from "./navigation-left";
import NavigationRight from "./navigation-right";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const changeBackgroundScroll = () => {
      if (window.scrollY >= 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", changeBackgroundScroll);
  }, []);

  return (
    <>
      <header
        className={`${
          isScroll
            ? "fixed top-0 w-full z-20 shadow-md  bg-white duration-100 transition-all ease-in"
            : "fixed top-0 w-full z-20 sm:bg-transparent bg-white duration-100 transition-all ease-in"
        }`}
      >
        <nav className="flex px-5 lg:px-16 py-3 justify-between items-center container mx-auto">
          <NavigationLeft isScroll={isScroll} />
          <NavigationRight setIsOpenMenu={setIsOpenMenu} isScroll={isScroll} />
        </nav>
      </header>
      <div className="fixed mt-20 top-0 z-50 bg-white shadow-md w-full">
        {isOpenMenu && (
          <div className="lg:hidden ml-auto w-full  flex flex-col h-auto mb-4 transition-all duration-150 ease-in-out">
            <NavigationItemMobile />
          </div>
        )}
      </div>
    </>
  );
}

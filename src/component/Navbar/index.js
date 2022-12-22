import { useState } from "react";
import NavigationItemMobile from "./navigation-item-mobile";
import NavigationLeft from "./navigation-left";
import NavigationRight from "./navigation-right";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-30 shadow-md">
        <nav className="flex px-5 lg:px-16 py-3 justify-between items-center container mx-auto">
          <NavigationLeft />
          <NavigationRight setIsOpenMenu={setIsOpenMenu} />
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

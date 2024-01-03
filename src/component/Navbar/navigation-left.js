import Link from "next/link";
import React from "react";

export default function NavigationLeft({ isScroll }) {
  return (
    <div className="">
      <Link href="/" passHref>
        <>
          <a className="lg:block hidden">
            {isScroll ? (
              <img
                src="/assets/logo-after.png"
                alt="logo"
                className="block w-[60px] h-[70px] cursor-pointer "
              />
            ) : (
              <img
                src="/assets/logo-before.png"
                alt="logo"
                className="block w-[60px] h-[70px] cursor-pointer "
              />
            )}
          </a>
          <a className="lg:hidden block">
            <img
              src="/assets/logo-after.png"
              alt="logo"
              className="block w-[60px] h-[70px] cursor-pointer "
            />
          </a>
        </>
      </Link>
    </div>
  );
}

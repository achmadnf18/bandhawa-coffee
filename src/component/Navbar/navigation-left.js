import Link from "next/link";
import React from "react";

export default function NavigationLeft() {
  return (
    <div className="">
      <Link href="/" passHref>
        <a>
          <img
            src="/assets/logo-after.png"
            alt="logo"
            className="block w-[60px] h-[70px] cursor-pointer"
          />
        </a>
      </Link>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { Fragment, useState } from "react";
import { MobileDropMenu } from "./mobile-drop-menu";

const navList = [
  {
    id: 1,
    title: "About Us",
    to: "/",
  },
  {
    id: 2,
    title: "philosophy",
    to: "/phyloshopy",
  },
  {
    id: 3,
    title: "Our Products",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];
export default function NavigationItemMobile() {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  return (
    <div className="px-4 mt-4">
      <ul className="font-medium text-sm pt-3 px-3">
        {navList.map((list, index) => {
          return (
            <Fragment key={`navigasi-${index}`}>
              {list?.id !== 3 ? (
                <li key={index + 1} className="py-2">
                  <Link href={`${list.to}`} passHref>
                    <a className="text-black hover:text-gray-500">
                      {list.title}
                    </a>
                  </Link>
                </li>
              ) : (
                <MobileDropMenu
                  isOpenDropDown={isOpenDropDown}
                  setIsOpenDropDown={setIsOpenDropDown}
                />
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

import { MenuAlt3Icon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import { DropDownMenu } from "./drop-down-menu";

const navList = [
  {
    id: 1,
    title: "About Us",
    to: "/",
  },
  {
    id: 2,
    title: "Phyloshopy",
    to: "/phyloshophy",
  },
  {
    id: 3,
    title: "Our Products",
    to: "/",
  },
  {
    id: 4,
    title: "Contact",
    to: "/contact",
  },
];

export default function NavigationRight({ setIsOpenMenu }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  return (
    <>
      <ul className="lg:inline-flex hidden items-center mt-5">
        {navList.map((list, i) => {
          return (
            <Fragment key={`nav-link${i}`}>
              {list?.id !== 3 ? (
                <li className="px-3">
                  <Link href={list.to} passHref>
                    <a className="uppercase font-semibold text-black hover:text-black hover:border-b hover:border-b-black border-b border-b-transparent p-3 ">
                      {list.title}
                    </a>
                  </Link>
                </li>
              ) : (
                <DropDownMenu
                  isOpenDropDown={isOpenDropDown}
                  setIsOpenDropDown={setIsOpenDropDown}
                />
              )}
            </Fragment>
          );
        })}
      </ul>
      <button
        className="inline-flex p-2 hover:bg-[#dcdfe2] rounded lg:hidden text-primary hover:text-primary outline-none"
        onClick={() => setIsOpenMenu((state) => !state)}
      >
        <MenuAlt3Icon className="h-6 text-gray-400 hover:text-gray-500" />
      </button>
    </>
  );
}

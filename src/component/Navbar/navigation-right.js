import { MenuAlt3Icon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { DropDownMenu } from "./drop-down-menu";

const navList = [
  {
    id: 5,
    title: "Home",
    to: "/",
  },
  {
    id: 1,
    title: "About Us",
    to: "/about-us",
  },
  {
    id: 2,
    title: "philosophy",
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

export default function NavigationRight({ setIsOpenMenu, isScroll }) {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <ul className="lg:inline-flex hidden items-center mt-5 text-black">
        {navList.map((list, i) => {
          return (
            <Fragment key={`nav-link${i}`}>
              {list?.id !== 3 ? (
                <li className="px-3">
                  <Link href={list.to} passHref>
                    <a
                      className={`${
                        isScroll
                          ? path == list.to
                            ? "uppercase font-semibold transition-colors ease-in-out text-black hover:text-black border-b-2 border-b-black  p-3"
                            : "uppercase font-semibold transition-colors ease-in-out text-black hover:text-black hover:border-b-2 hover:border-b-black border-b-2 border-b-transparent p-3 "
                          : path == list.to
                          ? "uppercase font-semibold text-white hover:text-white border-b-2 border-b-white  p-3"
                          : "uppercase font-semibold text-white hover:text-white hover:border-b-2 hover:border-b-white border-b-2 border-b-transparent p-3 "
                      }`}
                    >
                      {list.title}
                    </a>
                  </Link>
                </li>
              ) : (
                <DropDownMenu
                  isScroll={isScroll}
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

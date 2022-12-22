import Link from "next/link";
import React from "react";

const navList = [
  {
    id: 1,
    title: "About Us",
    to: "/",
  },
  {
    id: 2,
    title: "Phyloshopy",
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
  return (
    <div className="px-4 mt-4">
      <ul className="font-medium text-sm pt-3 px-3">
        {navList.map((list, index) => {
          return (
            <li key={index + 1} className="py-2">
              <Link href={`${list.to}`} passHref>
                <a className="text-black hover:text-gray-500">{list.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

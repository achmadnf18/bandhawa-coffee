import { useState, useEffect } from "react";
import Link from "next/link";

const navList = [
  {
    id: 1,
    title: "About Us",
    navigasi: "/",
  },
  {
    id: 2,
    title: "PHYLOSHOPHY",
    navigasi: "/phyloshophy",
  },
  {
    id: 3,
    title: "beans",
    navigasi: "/beans",
  },
  {
    id: 4,
    title: "contact",
    navigasi: "/contact",
  },
];

export default function NavItems() {
  const [scrollEffect, setScrollEffect] = useState(false);

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
    <>
      {/* Mobile */}
      {navList?.map((row) => {
        return (
          <li className="mx-4 my-6 md:my-0 sm:hidden" key={row?.id}>
            <Link href={`${row?.navigasi}`} passHref>
              <h3
                className={
                  scrollEffect
                    ? "text-black md:text-lg font-medium cursor-pointer uppercase "
                    : "text-black md:text-lg font-medium cursor-pointer uppercase "
                }
              >
                {row?.title}
              </h3>
            </Link>
          </li>
        );
      })}

      {/* Desktop */}
      {navList?.map((row) => {
        return (
          <li className="mx-4 my-6 md:my-0 md:flex hidden" key={row?.id}>
            <Link href={`${row?.navigasi}`} passHref>
              <h3
                className={
                  scrollEffect
                    ? "text-black md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
                    : "text-white md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8"
                }
              >
                {row?.title}
              </h3>
            </Link>
          </li>
        );
      })}
    </>
  );
}

import { useState, useEffect } from "react";
import Link from "next/link";
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
      <li className="mx-4 my-6 md:my-0 sm:hidden">
        <Link href="/" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase "
                : "text-black md:text-lg font-medium cursor-pointer uppercase "
            }
          >
            About Us
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 sm:hidden">
        <Link href="/phyloshophy" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase "
                : "text-black md:text-lg font-medium cursor-pointer uppercase "
            }
          >
            PHYLOSHOPHY
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 sm:hidden">
        <Link href="/beans" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase "
                : "text-black md:text-lg font-medium cursor-pointer uppercase "
            }
          >
            beans
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 sm:hidden">
        <Link href="/contact" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase "
                : "text-black md:text-lg font-medium cursor-pointer uppercase "
            }
          >
            contact
          </h3>
        </Link>
      </li>

      {/* Desktop */}
      <li className="mx-4 my-6 md:my-0 md:flex hidden">
        <Link href="/" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
                : "text-white md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8"
            }
          >
            About Us
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 md:flex hidden">
        <Link href="/phyloshophy" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
                : "text-white md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
            }
          >
            PHYLOSHOPHY
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 md:flex hidden">
        <Link href="/beans" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
                : "text-white md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
            }
          >
            beans
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0 md:flex hidden">
        <Link href="/contact" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
                : "text-white md:text-lg font-medium cursor-pointer uppercase hover:underline hover:underline-offset-8 "
            }
          >
            contact
          </h3>
        </Link>
      </li>
    </>
  );
}

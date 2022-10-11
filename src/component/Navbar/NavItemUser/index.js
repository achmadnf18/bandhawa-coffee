import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import axios from "axios";
import { useRouter } from "next/router";
export const API_SERVER = process.env.api_v1;

export default function NavItemUser() {
  const router = useRouter();
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
  const logout = async () => {
    try {
      localStorage.removeItem("email");
      await axios.delete(`${API_SERVER}logout`);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <li className="mx-4 my-6 md:my-0">
        <Link href="/" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black text-sm font-medium cursor-pointer uppercase "
                : "text-white text-sm font-medium cursor-pointer uppercase "
            }
          >
            About Us
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="/phyloshophy" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black text-sm font-medium cursor-pointer uppercase "
                : "text-white text-sm font-medium cursor-pointer uppercase "
            }
          >
            PHYLOSHOPHY
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="/beans" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black text-sm font-medium cursor-pointer uppercase "
                : "text-white text-sm font-medium cursor-pointer uppercase "
            }
          >
            beans
          </h3>
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="/contact" passHref>
          <h3
            className={
              scrollEffect
                ? "text-black text-sm font-medium cursor-pointer uppercase "
                : "text-white text-sm font-medium cursor-pointer uppercase "
            }
          >
            contact
          </h3>
        </Link>
      </li>
      <li className="mx-3 my-6 md:my-0">
        <button
          onClick={() => logout}
          className={
            scrollEffect
              ? "text-black text-sm font-medium cursor-pointer uppercase "
              : "text-white text-sm font-medium cursor-pointer uppercase "
          }
        >
          Logout
        </button>
      </li>
    </>
  );
}

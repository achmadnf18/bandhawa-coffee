import React from "react";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
export default function NavItems() {
  const router = useRouter();
  const handleRouting = () => {
    router.push("/");
  };
  return (
    <>
      <li className="mx-4 my-6 md:my-0">
        <Link
          to="about"
          spy={true}
          smooth={true}
          isDynamic={true}
          offset={-200}
          onClick={handleRouting}
          className="font-medium cursor-pointer"
        >
          About Us
        </Link>
      </li>

      <li className="mx-4 my-6 md:my-0">
        <Link
          to="product"
          spy={true}
          smooth={true}
          isDynamic={true}
          offset={-200}
          onClick={handleRouting}
          className="font-medium cursor-pointer"
        >
          Product
        </Link>
      </li>

      <li className="mx-4 my-6 md:my-0">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          isDynamic={true}
          offset={-200}
          onClick={handleRouting}
          className="font-medium cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );
}

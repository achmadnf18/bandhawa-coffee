import React from "react";
import NavItems from "../NavItem";

export default function Nav() {
  return (
    <ul className="hidden sm:flex justify-end items-center space-x-10">
      <NavItems>About Us</NavItems>
      <NavItems>Product</NavItems>
      <NavItems>Contact</NavItems>
    </ul>
  );
}

import NavItems from "../NavItem";
// import { useState, useEffect } from "react";

// import axios from "axios";
// import NavItemUser from "../NavItemUser";
export const API_SERVER = process.env.api_v1;

export default function Nav({ openMenu }) {
  return (
    <div className="sm:relative sm:top-3">
      <ul className="hidden sm:flex items-center opacity-100 ">
        <NavItems />
      </ul>
      {openMenu && (
        <ul className="md:hidden  z-[-1] absolute bg-white   w-full left-0 text-black">
          <NavItems />
        </ul>
      )}
    </div>
  );
}

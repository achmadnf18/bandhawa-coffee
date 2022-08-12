import React from "react";

export default function NavItems({ children }) {
  return (
    <li>
      <a className="font-medium white">{children}</a>
    </li>
  );
}

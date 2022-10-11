import NavItems from "../NavItem";
// import { useState, useEffect } from "react";

// import axios from "axios";
// import NavItemUser from "../NavItemUser";
export const API_SERVER = process.env.api_v1;

export default function Nav({ openMenu }) {
  // Get Token
  // const [token, setToken] = useState("");
  // const [local, setLocal] = useState("");

  // useEffect(() => {
  //   setLocal(localStorage.getItem("email"));
  //   isAuth();
  // }, []);

  // const isAuth = async () => {
  //   try {
  //     const res = await axios.get(`${API_SERVER}users`);
  //     setToken(res.data[0].email);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="sm:relative sm:top-3">
      {/* Desktop */}
      <ul className="hidden sm:flex items-center opacity-100 ">
        <NavItems />
      </ul>
      {/* Mobile */}
      {openMenu && (
        <ul className="md:hidden  z-[-1] absolute bg-white   w-full left-0 text-black">
          <NavItems />
        </ul>
      )}
    </div>
  );
  // if (token == local) {
  //   return (
  //     <div>
  //       {/* Desktop */}
  //       <ul className="hidden sm:flex items-center opacity-100 ">
  //         <NavItemUser />
  //       </ul>
  //       {/* Mobile */}
  //       {openMenu && (
  //         <ul className="md:hidden z-[-1] absolute bg-white w-full left-0 text-black">
  //           <NavItemUser />
  //         </ul>
  //       )}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {/* Desktop */}
  //       <ul className="hidden sm:flex items-center opacity-100 ">
  //         <NavItems />
  //       </ul>
  //       {/* Mobile */}
  //       {openMenu && (
  //         <ul className="md:hidden z-[-1] absolute sm:bg-transparent bg-white bg-opacity-90  w-full left-0 text-black">
  //           <NavItems />
  //         </ul>
  //       )}
  //     </div>
  //   );
  // }
}

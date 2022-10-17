import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { setAuthToken } from "@/api/jwtAxios";

export const MyContext = createContext();
export const API_SERVER = process.env.api_v1;

export const useMyContext = () => useContext(MyContext);

export default function MyContextProvider({ children }) {
  const Axios = axios.create({
    baseURL: API_SERVER,
  });
  const initialState = {
    idUser: undefined,
    idRole: undefined,
    isAuth: undefined,
    showLogin: undefined,
    isSession: undefined,
    tokenContext: undefined,
  };
  const [state, setState] = useState({ initialState });
  const router = useRouter();

  // useEffect(() => {
  //   setState({
  //     idUser: localStorage.getItem("idUser"),
  //     idRole: Cookies.get("idRole"),
  //     isAuth: localStorage.getItem("loginToken") == null ? false : true,
  //     showLogin: localStorage.getItem("loginToken") == null ? false : true,
  //     isSession: localStorage.getItem("loginToken") == null ? false : true,
  //     tokenContext: localStorage.getItem("loginToken"),

  //   });
  //   isLoggedIn();
  // }, []);

  return <MyContext.Provider>{children}</MyContext.Provider>;
}

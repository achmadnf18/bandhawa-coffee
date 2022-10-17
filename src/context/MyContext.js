import React, { createContext, useContext } from "react";

export const MyContext = createContext();
export const API_SERVER = process.env.api_v1;

export const useMyContext = () => useContext(MyContext);

export default function MyContextProvider({ children }) {
  return <MyContext.Provider>{children}</MyContext.Provider>;
}

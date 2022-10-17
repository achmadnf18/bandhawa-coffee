import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAdmin = () => {
  const jwtAxios = axios.create({
    baseURL: process.env.api_v1, // YOUR_API_URL HERE
  });
  const apiPath = "/users";

  const doFetchList = async () => {
    const res = await axios.get(`http://localhost:3001/users`);
    return res.data;
  };

  const getListData = () =>
    useQuery([`${apiPath}`], () => doFetchList(), {
      keepPreviousData: true,
    });

  return {
    getListData,
  };
};

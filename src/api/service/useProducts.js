import { useQuery, useMutation } from "@tanstack/react-query";
import jwtAxios from "../jwtaxios";
export const useProducts = () => {
  const apiPath = "/products";
  const doFetchList = async () => {
    const res = await jwtAxios.get(`${apiPath}`);
    return res.data;
  };

  const getListProduct = () =>
    useQuery([`${apiPath}`], () => doFetchList(), {
      keepPreviousData: true,
    });

  const addProducts = ({ onSuccess, onError }) =>
    useMutation(async (payload) => await jwtAxios.post(`${apiPath}`, payload), {
      onSuccess,
      onError,
    });

  const updateProducts = ({ onSuccess, onError, idProduct }) =>
    useMutation(
      async (payload) =>
        await jwtAxios.put(`${apiPath}/${idProduct?.id}`, payload),
      {
        onSuccess,
        onError,
        idProduct,
      }
    );

  const deleteProducts = ({ onSuccess, onError }) =>
    useMutation(
      async (payload) =>
        await jwtAxios.delete(`${apiPath}/${payload?.id}`, payload),
      {
        onSuccess,
        onError,
      }
    );

  return {
    getListProduct,
    addProducts,
    deleteProducts,
    updateProducts,
  };
};

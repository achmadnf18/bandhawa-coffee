import axios from "axios";
import { useRouter } from "next/router";

const URL = "http://localhost/3001/";
const router = useRouter;
export const LoginUser = async (data) => {
  try {
    await axios.post(`${URL}login`, data);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const GetUser = async (data) => {};

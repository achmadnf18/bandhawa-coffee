import { useState, useEffect } from "react";
import axios from "axios";

export default function dashboard() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    refreshToken();
  }, []);
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/products");
      // setToken(response.data.accessToken);
      // const decoded = jwt_decode(response.data.accessToken);
      setDatas(response?.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {datas?.map((row) => {
        return (
          <div key={row?.id}>
            <img src={row?.foto} className="w-full" />
            <div>
              <h1>{row?.name}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

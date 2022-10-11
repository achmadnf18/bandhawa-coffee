import axios from "axios";
export const API_SERVER = process.env.api_v1;

// Get All Product
export const getAllProduct = async () => {
  await axios
    .get(`${API_SERVER}products`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createNewProduct = async (newData, fileSend) => {
  const body = new FormData();
  body.append("name", newData?.name);
  body.append("description", newData?.description);
  body.append("type", newData?.type);
  body.append("process", newData?.process);
  body.append("elevation", newData?.elevation);
  body.append("varieties", newData?.varieties);
  body.append("taste", newData?.taste);
  body.append("foto", fileSend);
  await axios
    .post(`${API_SERVER}products/add`, body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const updateProduct = async (id, updateData, fileSend) => {
  const body = new FormData();
  body.append("name", updateData?.name);
  body.append("description", updateData?.description);
  body.append("type", updateData?.type);
  body.append("process", updateData?.process);
  body.append("elevation", updateData?.elevation);
  body.append("varieties", updateData?.varieties);
  body.append("taste", updateData?.taste);
  body.append("foto", fileSend);

  await axios
    .put(`${API_SERVER}products/update/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteProduct = async (id) => {
  await axios
    .delete(`${API_SERVER}products/delete/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

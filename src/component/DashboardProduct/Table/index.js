// import Image from "next/image";
import React from "react";
import swal from "sweetalert";
import { deleteProduct } from "../../../service/index";

export default function TableProductDashboard({
  dataProduct,
  setSelectedProduct,
  setUpdateOpenForm,
  setDataProduct,
}) {
  // Update By Id
  const handleEditData = (id) => {
    setSelectedProduct(id);
    setUpdateOpenForm(true);
  };

  const handleRemoveData = async (id) => {
    // console.log(id);
    setDataProduct(dataProduct?.filter((item) => item?.id !== id));
    await deleteProduct(id);
  };

  const removeAlert = (id) => {
    swal({
      title: "Are you sure?",
      text: "You Will Delete This Data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Product Already Deleted !", {
          icon: "success",
        }),
          // console.log(id);
          handleRemoveData(id);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left ">
          <thead className="text-sm text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Type
              </th>
              <th scope="col" className="py-3 px-6">
                Process
              </th>
              <th scope="col" className="py-3 px-6">
                Elevation
              </th>
              <th scope="col" className="py-3 px-6">
                Varieties
              </th>
              <th scope="col" className="py-3 px-6">
                Taste
              </th>
              <th scope="col" className="py-3 px-8">
                Foto
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataProduct?.map((row) => {
              return (
                <tr
                  className="bg-white border-b  border-gray-700"
                  key={row?.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {row?.name}
                  </th>
                  <td className="py-4 px-6">{row?.description}</td>
                  <td className="py-4 px-6">{row?.type}</td>
                  <td className="py-4 px-6">{row?.process}</td>
                  <td className="py-4 px-6">{row?.elevation}</td>
                  <td className="py-4 px-6">{row?.varieties}</td>
                  <td className="py-4 px-6">{row?.taste}</td>
                  <td className="py-4 px-6">
                    <img
                      src={row?.foto}
                      width={100}
                      height={100}
                      layout="fixed"
                      objectFit="contain"
                    />
                  </td>
                  <td className="py-4 px-6 flex items-center gap-4">
                    <button onClick={() => handleEditData(row?.id)}>
                      Edit
                    </button>
                    <button onClick={() => removeAlert(row?.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

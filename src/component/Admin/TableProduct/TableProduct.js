import React from "react";
import swal from "sweetalert";
export const BASE_API_IMAGE = process.env.api_image;
export default function TableProduct({
  getList,
  setIsOpenUpdate,
  setSelectedProduct,
  deleteProducts,
}) {
  const getUpdateDataById = (id) => {
    setSelectedProduct(id);
    setIsOpenUpdate(true);
  };

  const doDelete = deleteProducts({
    onSuccess: (res) => {
      if (res) {
        swal({
          text: "Delete Success",
          icon: "success",
        });
        getList?.refetch();
      }
    },
    onError: (err) => {
      if (err) {
        swal({
          text: "Error",
          icon: "error",
        });
      }
    },
  });

  const handleDelete = (id) => {
    doDelete.mutate({
      id: id,
    });
  };
  return (
    <div className="overflow-x-auto relative mt-5">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Foto
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Taste
            </th>
            <th scope="col" className="py-3 px-6">
              Variety
            </th>
            <th scope="col" className="py-3 px-6">
              Score
            </th>
            <th scope="col" className="py-3 px-6">
              Process
            </th>
            <th scope="col" className="py-3 px-6">
              Weight
            </th>
            <th scope="col" className="py-3 px-6">
              Available
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
            <th scope="col" className="py-3 px-6">
              Beans
            </th>
            <th scope="col" className="py-3 px-6">
              Elevation
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {getList?.data?.data?.map((row, i) => {
            return (
              <tr className="bg-white border-b " key={i + 1}>
                <th
                  scope="row"
                  className="py-5 px-5 font-medium text-gray-900 whitespace-nowrap "
                >
                  {/* src={`${BASE_API_IMAGE}/${image}`} */}
                  <img src={`${BASE_API_IMAGE}/${row?.image}`} />
                </th>
                <td className="py-5 px-5 whitespace-nowrap">{row?.name}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.taste}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.variety}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.score}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.process}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.weight}</td>
                <td className="py-5 px-5 whitespace-nowrap">
                  {row?.available}
                </td>
                <td className="py-5 px-5 whitespace-nowrap">
                  {row?.description}
                </td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.type}</td>
                <td className="py-5 px-5 whitespace-nowrap">{row?.beans}</td>
                <td className="py-5 px-5 whitespace-nowrap">
                  {row?.elevation}
                </td>
                <td className="py-5 px-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <button onClick={() => getUpdateDataById(row?.id)}>
                      Update
                    </button>{" "}
                    <button
                      // onClick={() => handleDelete(row?.id)}
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: "Once Delete, You Must Re-Create",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            swal(
                              "Product Already Deleted",
                              {
                                icon: "success",
                              },
                              handleDelete(row?.id)
                            );
                          } else {
                            swal("Oke please check it again !");
                          }
                        });
                      }}
                      className="bg-red-300 px-3 py-2 rounded-lg text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function TableProduct() {
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
              Elevation
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="py-5 px-5 font-medium text-gray-900 whitespace-nowrap "
            >
              Foto
            </th>
            <td className="py-5 px-5 whitespace-nowrap">Aceh Gayo</td>
            <td className="py-5 px-5 whitespace-nowrap">
              Guava, Well Rounded, Balance, Brown Sugar
            </td>
            <td className="py-5 px-5 whitespace-nowrap">
              Tim-tim, Bourbon, Ateng Super, Abyssinia
            </td>
            <td className="py-5 px-5 whitespace-nowrap">85.5</td>
            <td className="py-5 px-5 whitespace-nowrap">Natural</td>
            <td className="py-5 px-5 whitespace-nowrap">60 kg</td>
            <td className="py-5 px-5 whitespace-nowrap">Get Inquiry</td>
            <td className="py-5 px-5 whitespace-nowrap">Desc</td>
            <td className="py-5 px-5 whitespace-nowrap">Arabica</td>
            <td className="py-5 px-5 whitespace-nowrap">1500 - 1700 MASL</td>
            <td className="py-5 px-5 whitespace-nowrap">
              <button>Update</button> <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

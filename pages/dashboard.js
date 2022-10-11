// import { useState, useEffect } from "react";
// import axios from "axios";

// import Layout from "../src/layout/index";
// import Container from "../src/container";
// import TableProductDashboard from "../src/component/DashboardProduct/Table";
// import NewProductDashboard from "../src/component/DashboardProduct/NewProduct";
// import UpdateProductDashboard from "../src/component/DashboardProduct/UpdateProduct";

// export const API_SERVER = process.env.api_v1;

// export default function dashboard({ GetAllProduct }) {
//   // Get Token
//   const [token, setToken] = useState("");
//   const [local, setLocal] = useState("");

//   // Open Close Modal
//   const [openForm, setOpenForm] = useState(false);
//   const [updateOpenForm, setUpdateOpenForm] = useState(false);

//   // Selected Product Data
//   const [selectedProduct, setSelectedProduct] = useState({});

//   // State Data
//   const [dataProduct, setDataProduct] = useState([]);

//   // Get All Product
//   const getAllProductData = GetAllProduct?.map((row) => ({
//     id: row?.id,
//     description: row?.description,
//     elevation: row?.elevation,
//     foto: row?.foto,
//     name: row?.name,
//     process: row?.process,
//     taste: row?.taste,
//     type: row?.type,
//     varieties: row?.varieties,
//     createdAt: row?.createdAt,
//     updatedAt: row?.updatedAt,
//   }));

//   useEffect(() => {
//     setLocal(localStorage.getItem("email"));
//     const fetchData = async () => {
//       setDataProduct(await getAllProductData);
//     };
//     fetchData();
//     isAuth();
//   }, []);

//   // Update Data
//   const updateData = async () => {
//     setDataProduct(await getAllProductData());
//   };

//   const isAuth = async () => {
//     try {
//       const res = await axios.get(`${API_SERVER}users`);
//       setToken(res.data[0].email);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (token == null) return null;
//   if (token == local) {
//     return (
//       <Layout pageTitle="Dashboard">
//         <Container padding="py-32">
//           <div className="h-screen">
//             <h1 className=" md:text-5xl text-3xl font-semibold">
//               Dashboard Admin
//             </h1>

//             {/* New Input */}
//             <button onClick={() => setOpenForm(true)}>Input</button>
//             <NewProductDashboard
//               openForm={openForm}
//               onClose={() => setOpenForm(false)}
//             />
//             {/* Table Product */}
//             <TableProductDashboard
//               dataProduct={dataProduct}
//               setSelectedProduct={setSelectedProduct}
//               setUpdateOpenForm={setUpdateOpenForm}
//               setDataProduct={setDataProduct}
//             />
//             <UpdateProductDashboard
//               dataProduct={dataProduct}
//               selectedProduct={selectedProduct}
//               updateData={updateData}
//               updateOpenForm={updateOpenForm}
//               onClose={() => setUpdateOpenForm(false)}
//             />
//           </div>
//         </Container>
//       </Layout>
//     );
//   } else {
//     return <></>;
//   }
// }

// export const getServerSideProps = async () => {
//   // console.log("ini token ya");
//   const res = await axios
//     .get(`${API_SERVER}products`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
//   const GetAllProduct = res.data;
//   return {
//     props: {
//       GetAllProduct: GetAllProduct || null,
//     },
//   };
// };
import React from "react";

export default function dashboard() {
  return <div>dashboard</div>;
}

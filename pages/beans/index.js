import Layout from "../../src/layout";
import Product from "../../src/component/Product";
import ListProduct from "../../src/data/listproduct.json";
// API
// import axios from "axios";
export const API_SERVER = process.env.api_v1;

export default function Beans() {
  return (
    <Layout pageTitle="Beans">
      <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img ">
        <div className="bg-black/70 w-full">
          <div className="flex items-center justify-center align-middle py-44 ">
            <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
              Beans
            </h3>
          </div>
        </div>
      </div>
      <Product getAllProductBeans={ListProduct} />
    </Layout>
  );
}
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

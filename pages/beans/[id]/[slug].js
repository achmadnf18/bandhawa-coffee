import { useRouter } from "next/router";
import ListProduct from "../../../src/data/listproduct.json";
import Layout from "../../../src/layout";

// API
// import axios from "axios";
import SliderProduct from "../../../src/component/SliderProduct";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
// export const API_SERVER = process.env.api_v1;

// export default function ProductDetails({ getBeansSlug, getAllProduct }) {
export default function ProductDetails() {
  const router = useRouter();
  const idProduct = router.query.id;

  const getDataById = ListProduct?.find((item) => item.id === idProduct);
  const DetailProduct = {
    id: getDataById?.id,
    name: getDataById?.name,
    description: getDataById?.description,
    type: getDataById?.type,
    process: getDataById?.process,
    elevation: getDataById?.elevation,
    varieties: getDataById?.varieties,
    taste: getDataById?.taste,
    foto: getDataById?.foto,
  };

  return (
    <Layout pageTitle={`Coffee - Temanggung`}>
      <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img cursor-pointer">
        <div className="bg-black/70 w-full">
          <div className="flex items-center justify-center align-middle py-44 ">
            <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
              Beans
            </h3>
          </div>
        </div>
      </div>
      {/* Detail Produk */}
      <section>
        <div className="container mx-auto md:px-4 px-10 pt-20 pb-10">
          {/* Button Back */}
          <Link href="/beans" passHref>
            <button className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
              <ChevronLeftIcon className="w-4 h-4 text-white" />
              Back
            </button>
          </Link>
          {/* Indonesia */}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10 ">
            {/* Left */}
            <div>
              <div>
                {/* Detail Name */}
                <h3 className="text-4xl uppercase font-bold leading-none">
                  {DetailProduct?.name}
                </h3>
                {/* Location */}
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.taste}
                </p>
              </div>

              {/* Origin */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Origin</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.description}
                </p>
              </div>
              {/* Type */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Type</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.type}
                </p>
              </div>

              {/* Process */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Process</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.process}
                </p>
              </div>
              {/* Elevation */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Elevation</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.elevation}
                </p>
              </div>
              {/* Varieties */}
              <div className="my-12">
                <h4 className="text-lg leading-none font-bold">Varieties</h4>
                <p className="text-lg leading-none font-medium italic text-[#027879]">
                  {DetailProduct.varieties}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Link href="/beans/green-bean" passHref>
                  <a className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
                    Green Beans
                  </a>
                </Link>
                <Link href="/beans/roasted-bean" passHref>
                  <a className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
                    Roasted Beans
                  </a>
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center justify-center">
              <div className=" ">
                <img
                  src={DetailProduct?.foto}
                  alt="product.jpg"
                  className="object-contain sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]"
                  // width={450}
                  // height={450}
                  // layout="fill"
                  // objectFit="contain"
                />
              </div>
            </div>
          </div>

          <SliderProduct />
        </div>
      </section>
    </Layout>
  );
}

// export const getServerSideProps = async (context) => {
//   const idBeans = context.query.id;
//   const slugBeans = context.query.slug;

//   const res = await axios
//     .get(`${API_SERVER}products/${idBeans}/${slugBeans}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });

//   const allData = await axios
//     .get(`${API_SERVER}products`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });

//   const DetailProduct = res.data;
//   const getAllProduct = allData?.data;
//   return {
//     props: {
//       getBeansSlug: getBeansSlug || null,
//       getAllProduct: getAllProduct || null,
//     },
//   };
// };

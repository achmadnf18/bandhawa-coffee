// import { useRouter } from "next/router";
// import Layout from "../../../src/layout";
// import SliderProduct from "../../../src/component/SliderProduct";
// import { ChevronLeftIcon } from "@heroicons/react/outline";
// import Link from "next/link";
// import BannerHeader from "@/component/BannerHeader/BannerHeader";
// import { useProducts } from "@/api/service/useProducts";
// export const BASE_API_IMAGE = process.env.api_image;

// export default function DummyDummy() {
//   const router = useRouter();
//   const idProduct = router?.query?.id;
//   const service = useProducts();
//   const doFetch = service.getListProduct();
//   const getList = doFetch?.data?.data;

//   const findDataById = getList?.find((items) => items?.id == idProduct);
//   const DetailProduct = {
//     id: findDataById?.id,
//     name: findDataById?.name,
//     beans: findDataById?.beans,
//     taste: findDataById?.taste,
//     variety: findDataById?.variety,
//     score: findDataById?.score,
//     process: findDataById?.process,
//     weight: findDataById?.weight,
//     available: findDataById?.available,
//     type: findDataById?.type,
//     elevation: findDataById?.elevation,
//     image: findDataById?.image,
//     description: findDataById?.description,
//   };

//   return (
//     <Layout pageTitle={`Detail-Coffee`}>
//       <BannerHeader title="beans" />
//       {/* Detail Produk */}
//       <section>
//         <div className="container mx-auto md:px-4 px-10 pt-20 pb-10">
//           {/* Button Back */}
//           <Link href="/beans" passHref>
//             <button className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
//               <ChevronLeftIcon className="w-4 h-4 text-white" />
//               Back
//             </button>
//           </Link>
//           {/* Indonesia */}

//           <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 py-10 ">
//             {/* Left */}
//             <div>
//               <div>
//                 {/* Detail Name */}
//                 <h3 className="text-4xl uppercase font-bold leading-none">
//                   {DetailProduct?.name}
//                 </h3>
//                 {/* Location */}
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.taste}
//                 </p>
//               </div>

//               {/* Origin */}
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Origin</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.description}
//                 </p>
//               </div>
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Score</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.score}
//                 </p>
//               </div>
//               {/* Type */}
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Type</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.type}
//                 </p>
//               </div>

//               {/* Process */}
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Process</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.process}
//                 </p>
//               </div>
//               {/* Elevation */}
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Elevation</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.elevation}
//                 </p>
//               </div>
//               {/* Varieties */}
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Varieties</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.variety}
//                 </p>
//               </div>
//               <div className="my-12">
//                 <h4 className="text-lg leading-none font-bold">Available</h4>
//                 <p className="text-lg leading-none font-medium italic text-[#027879]">
//                   {DetailProduct.available}
//                 </p>
//               </div>
//               {/* <div className="flex items-center gap-5">
//                 <Link href="/beans/green-bean" passHref>
//                   <a className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
//                     Green Beans
//                   </a>
//                 </Link>
//                 <Link href="/beans/roasted-bean" passHref>
//                   <a className="text-xs bg-[#101B49] gap-3 inline-flex px-4 py-2 rounded-full items-center justify-between text-white">
//                     Roasted Beans
//                   </a>
//                 </Link>
//               </div> */}
//             </div>

//             {/* Right */}
//             <div className="flex items-center justify-center">
//               <div className=" ">
//                 <img
//                   src={`${BASE_API_IMAGE}/${DetailProduct?.image}`}
//                   alt="product.jpg"
//                   className="object-contain sm:w-[450px] sm:h-[450px] w-[200px] h-[200px]"
//                 />
//               </div>
//             </div>
//           </div>

//           <SliderProduct />
//         </div>
//       </section>
//     </Layout>
//   );
// }

import React from "react";

export default function Dummys() {
  return <div>Dummys</div>;
}

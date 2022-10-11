// import React from "react";
// import Layout from "../../src/layout";

// // API
// import axios from "axios";
// import Link from "next/link";
// import HeroText from "../../src/component/Hero/HeroText";
// export const API_SERVER = process.env.api_v1;

// export default function arabica({ getBeanArabica }) {
//   return (
//     <Layout>
//       <div className="flex items-center justify-center bg-fixed bg-center bg-cover arabica-img cursor-pointer">
//         <div className="bg-black/70 w-full">
//           <div className="flex items-center justify-center align-middle py-44 ">
//             <HeroText />
//           </div>
//         </div>
//       </div>
//       {/* List Arabica */}
//       <section className="h-screen container mx-auto">
//         <h2 className="lg:text-4xl sm:text-2xl text-xl font-semibold text-center  ">
//           List Product Arabica Beans
//         </h2>
//         <div className="grid grid-cols-12 gap-3 py-2  ">
//           <div className="md:col-span-3 col-span-12 md:font-normal font-medium text-lg  ">
//             {getBeanArabica?.name}
//           </div>
//           <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
//             {getBeanArabica?.description}
//           </div>
//           <div className="md:col-span-2 col-span-6 md:text-lg text-sm ">
//             {getBeanArabica?.type}
//           </div>
//           <div className="md:col-span-2 col-span-6 md:text-lg text-sm">
//             <img src={getBeanArabica?.foto} className="w-[100px]" />
//           </div>
//           <div className="md:col-span-2 col-span-6 md:text-lg text-sm">
//             {getBeanArabica?.varieties}
//           </div>
//           <div className="md:col-span-1 col-span-12 flex items-center  justify-center ">
//             <Link
//               href={`/beans/${getBeanArabica?.id}/${getBeanArabica?.slug}`}
//               passHref
//             >
//               <button className=" bg-green-500 md:px-2 py-1.5 md:w-28 w-full rounded-lg text-white uppercase">
//                 details
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export const getServerSideProps = async () => {
//   const res = await axios
//     .get(`${API_SERVER}products/bean/type/arabica`)
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return err;
//     });
//   const getBeanArabica = res.data;
//   return {
//     props: {
//       getBeanArabica: getBeanArabica || null,
//     },
//   };
// };

import { useState, useEffect } from "react";
import Layout from "../../src/layout";

import Link from "next/link";
import Arabica from "../../src/data/arabica.json";
import ReactPaginate from "react-paginate";
export default function arabica() {
  const [productList, setProductList] = useState(Arabica);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProductList(Arabica?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Arabica?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Arabica]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Arabica?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Layout pageTitle="Coffee || Arabica">
        <div className="flex items-center justify-center bg-fixed bg-center bg-cover bg-no-repeat arabica-img cursor-pointer">
          <div className="bg-black/70 w-full">
            <div className="flex items-center justify-center align-middle py-44 ">
              <h3 className="sm:mt-0 mt-20 uppercase text-white md:tracking-[2rem] sm:tracking-[1rem] tracking-[0.5rem] md:pl-4 lg:text-4xl md:text-3xl sm:text-2xl text-xl  text-center leading-none drop-shadow-md">
                ARABICA
              </h3>
            </div>
          </div>
        </div>
        {/* List Arabica */}
        <section className="container mx-auto py-10">
          {/* <h2 className="text-xl font-light italic text-center pb-14 ">
            We Process Arabica coffee beans from the harvests of our forested
            farmers, into array of varriants of distinctive flavors
          </h2> */}
          <>
            {productList.map((row, i) => {
              return (
                <>
                  <div className="grid grid-cols-12 gap-2  pb-4" key={i + 1}>
                    <div className="bg-contain md:block hidden ">
                      <div className="">
                        <img
                          src={row?.foto}
                          className=" max-w-20 object-contain lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]"
                          // layout="fill"
                          // objectFit="contain"
                        />
                      </div>
                      {/* <img src="/assets/beans/beans.png" className=" max-w-20" /> */}
                    </div>
                    <div className="md:col-span-3 col-span-12 realative mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        {row?.name}
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.taste}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-6  realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Origin
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.description}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-6 realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Process
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.process}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-12 realative md:mt-6">
                      <h5 className="text-sm font-bold uppercase leading-none">
                        Varieties
                      </h5>
                      <p className="text-sm leading-none text-[#027879]">
                        {row?.varieties}
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-12 md:ml-4 realative md:mt-6">
                      <Link href={`/beans/${row?.id}/${row?.slug}`} passHref>
                        <button className="text-xs bg-[#101B49] px-4 py-2 md:w-28 w-full text-white rounded-full">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </>
          {/* Pagination */}
          <ReactPaginate
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-end gap-3"
            disabledClassName="hidden"
            activeLinkClassName="activePagination bg-red-300 px-3 py-1  rounded-md  "
          />
        </section>
      </Layout>
    </>
  );
}

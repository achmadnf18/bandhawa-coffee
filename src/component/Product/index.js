import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ProdukList from "../../data/listproduct.json";
import ListProduct from "./ListProduct";
export default function Product() {
  const [productList, setProductList] = useState(ProdukList);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProductList(ProdukList?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(ProdukList?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, ProdukList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ProdukList?.length;
    setItemOffset(newOffset);
  };
  return (
    <section id="product" className=" section-product h-fit ">
      <h2 className="lg:text-4xl sm:text-2xl text-xl font-semibold text-center  ">
        List Product
      </h2>
      {/* List Name  */}
      <div className="container mx-auto">
        <div className="hidden md:grid grid-cols-12  gap-3 py-2 font-semibold pt-14">
          <div className="col-span-3">Product Name</div>
          <div className="col-span-2">Location</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Process</div>
          <div className="col-span-3">Varieties</div>
        </div>
        {/* List Product */}
        <div className="md:pt-2 pt-8 pb-10">
          <ListProduct productList={productList} />
        </div>
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
      </div>
    </section>
  );
}

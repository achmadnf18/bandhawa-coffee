import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../Loading";
// import ProdukList from "../../data/listproduct.json";
import ListProduct from "./ListProduct";
export default function Product({ doFetch }) {
  const getList = doFetch?.data?.data;
  const [productList, setProductList] = useState(getList);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProductList(getList?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(getList?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, getList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % getList?.length;
    setItemOffset(newOffset);
  };
  return (
    <section id="product" className="section-product h-fit py-10 ">
      <div className="container mx-auto">
        <div className="md:pt-2 pt-8 pb-10">
          {productList?.length == 0 && (
            <div className="text-center my-28">- Beans Not Found-</div>
          )}
          {doFetch?.isFetching == true ? (
            <Loading color="text-gray-200" />
          ) : (
            <ListProduct productList={productList} />
          )}
        </div>
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

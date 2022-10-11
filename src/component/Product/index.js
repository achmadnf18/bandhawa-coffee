import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import ProdukList from "../../data/listproduct.json";
import ListProduct from "./ListProduct";
export default function Product({ getAllProductBeans }) {
  const [productList, setProductList] = useState(getAllProductBeans);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProductList(getAllProductBeans?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(getAllProductBeans?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, getAllProductBeans]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % getAllProductBeans?.length;
    setItemOffset(newOffset);
  };
  return (
    <section id="product" className="section-product h-fit py-10 ">
      <div className="container mx-auto">
        {/* <h2 className="text-xl font-light italic text-center pb-14 ">
          We Process Robusta and Arabica coffee beans from the harvests of our
          forested farmers, into array of varriants of distinctive flavors
        </h2> */}
        {/* List Name  */}

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

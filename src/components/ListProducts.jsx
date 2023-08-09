import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ListProducts = ({ changeLocation }) => {
  const { loading, error, data } = useFetch("https://dummyjson.com/products");
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.products.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.products.slice(startIndex, endIndex);
  };
  const currentPageItems = getCurrentPageItems();

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ProductList products={currentPageItems} changeLocation={changeLocation} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={nextPage}
        onPrevPage={prevPage}
      />
    </div>
  );
};

export default ListProducts;

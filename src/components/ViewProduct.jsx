import React from "react";
import useFetch from "../hooks/useFetch";

const ViewProduct = ({ id }) => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products/" + id
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const changeCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data.price);

  return (
    <>
      <h1>{data.title}</h1>
      <div>Category: {data.category}</div>
      <div>Price: {changeCurrency}</div>
      <div>Description: {data.description}</div>
      <div>
        <img src={data.thumbnail} alt={data.category} />
      </div>
    </>
  );
};

export default ViewProduct;

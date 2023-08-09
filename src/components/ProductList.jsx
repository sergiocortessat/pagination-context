import React from "react";

const ProductList = ({ products, changeLocation }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a
              className="link"
              onClick={() => changeLocation("view", { id: product.id })}
            >
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

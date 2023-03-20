import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCart = (product) => {
    console.log(product);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Products
            key={product.key}
            product={product}
            handleCart={handleCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Shop;

import React from "react";
import "./Products.css";

const Products = (props) => {
  const { key, name, img, price, star } = props.product;
  //   console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Products;

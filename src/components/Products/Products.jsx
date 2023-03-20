import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const { key, name, img, price, star } = props.product;
  //   console.log(props.product);
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <div>
        <button onClick={() => props.handleCart(props.product)}>
          Bye Now <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Products;

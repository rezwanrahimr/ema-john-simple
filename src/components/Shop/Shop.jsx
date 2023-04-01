import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDb, getStorageData } from "../../utilities/storeData";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const productss = useLoaderData();
  const [cart, setCart] = useState([]);
  console.log(typeof productss);

  const handleCart = (product) => {
    const newElement = [...cart, product];
    setCart(newElement);
    getDb(product.key);
  };

  useEffect(() => {
    let newAddedItems = getStorageData();
    // if (getLocalData) {
    // let  newAddedItems = JSON.parse(getLocalData);
    // }
    const newCartProduct = [];
    for (const id in newAddedItems) {
      const getObj = productss.find((product) => product.key === id);
      if (getObj) {
        const quantity = newAddedItems[id];
        getObj.quantity = quantity;
        newCartProduct.push(getObj);
      }
    }
    setCart(newCartProduct);
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container">
        {productss?.map((product) => (
          <Products
            key={product.key}
            product={product}
            handleCart={handleCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

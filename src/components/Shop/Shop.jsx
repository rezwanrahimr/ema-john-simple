import React, { useEffect, useState } from "react";
import { getDb, getStorageData } from "../../utilities/storeData";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    const newElement = [...cart, product];
    setCart(newElement);

    getDb(product.key);
  };

  useEffect(() => {
    const getLocalData = getStorageData();
    const newAddedItems = {};
    if (getLocalData) {
      const newAddedItems = JSON.parse(getLocalData);
    }
    const newCartProduct = [];
    for (const id in newAddedItems) {
      const getObj = products.find((product) => product.key === id);
      if (getObj) {
        const quantity = newAddedItems[id];
        getObj.quantity = quantity;
        newCartProduct.push(getObj);
      }
      console.log(getObj);
    }
    setCart(newCartProduct);
  }, [products]);

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
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

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
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    const newElement = [...cart, product];
    setCart(newElement);
    getDb(product.key);
    handleCartQuantity();
  };

  const handleCartQuantity = () => {
    const newCartProduct = [];
    let newAddedItems = getStorageData();
    for (const id in newAddedItems) {
      const getObj = products.find((product) => product.key === id);

      if (getObj) {
        const quantities = newAddedItems[id];
        getObj.Quantity = quantities;
        newCartProduct.push(getObj);
      }
    }
    setCart(newCartProduct);
  };

  /*  useEffect(() => {
    let storeCart = [];
    const localData = getStorageData();
    for (const id in localData) {
      if (products) {
        const cartProduct = products?.filter((element) => element.key === id);
        const Quantity = localData[id];
        cartProduct.Quantity = Quantity;
        storeCart.push(cartProduct[0]);
      }
    }

    setCart(storeCart);
  }, []); */
  return (
    <div className="shop-container">
      <div className="products-container">
        {products?.map((product) => (
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

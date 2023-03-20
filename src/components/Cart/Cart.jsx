import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const cartData of cart) {
    total = total + cartData.price;
  }
  //   console.log(cart);
  return (
    <div className="cart">
      <h2>Cart OverView: </h2>
      <p>Products Quantity:{cart.length} </p>
      <p>Total Price: ${total}</p>
      <p>Shipping: </p>
    </div>
  );
};

export default Cart;

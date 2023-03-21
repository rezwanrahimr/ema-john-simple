import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  for (const cartData of cart) {
    total = total + cartData.price;
    shipping = shipping + cartData.shipping;
  }
  let totalPrice = total + shipping;

  return (
    <div className="cart">
      <h2>Cart OverView: </h2>
      <p>Products Quantity:{cart.length} </p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Shipping:$ {shipping}</p>
      <p>Total : ${totalPrice}</p>
    </div>
  );
};

export default Cart;

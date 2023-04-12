import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const cartData of cart) {
    console.log("cartdata", cartData.price);
    quantity = quantity + parseFloat(cartData?.Quantity);
    total =
      parseFloat(cartData?.price) *
      parseFloat(cartData?.Quantity ? cartData.Quantity : 0);
    shipping = shipping + cartData?.shipping;
  }
  let totalPrice = total + shipping;

  return (
    <div className="cart">
      <h2>Cart OverView: </h2>
      <p>Products Quantity:{quantity} </p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Shipping:$ {shipping}</p>
      <p>Total : ${totalPrice}</p>
    </div>
  );
};

export default Cart;

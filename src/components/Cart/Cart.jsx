import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const cartData of cart) {
    // console.log(typeof cartData.price);
    quantity = quantity + parseFloat(cartData?.quantity);
    total = parseFloat(cartData.price) * parseFloat(cartData?.quantity);
    shipping = shipping + cartData?.shipping;
  }
  let totalPrice = total + shipping;

  console.log(cart);
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

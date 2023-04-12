import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const product = useLoaderData();
  return (
    <div>
      <h1>{product.length}</h1>
    </div>
  );
};

export default Order;

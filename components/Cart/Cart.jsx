import React, { useContext, useEffect, useState } from "react";
import cartContext from "../store/Context";
import Carte from "./Carte";
import classes from "./cart.module.css";

export default function Cart() {
  let { products } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const totall = () => {
    let price = 0;
    products.forEach((product) => (price += product.price * product.amount));
    setTotalPrice(price);
  };
  useEffect(() => {
    totall();
  });

  return (
    <>
      <div className="cart">
        {products.map((pro) => (
          <Carte key={pro.id} pro={pro} />
        ))}
      </div>
      <div className={classes.cart}>
        <p>
          total price: <span>${totalPrice.toFixed(2)}</span>
        </p>
        <button>Order</button>
      </div>
    </>
  );
}

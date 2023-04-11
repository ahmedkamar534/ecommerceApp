import Image from "next/image";
import React, { useContext } from "react";
import cartContext from "../store/Context";
import classes from "./carte.module.css";

export default function Carte(props) {
  let { amount, id, image, price } = props.pro;
  let pr = price.toFixed(2);
  let { removeProduct, addAmount, removeAmount } = useContext(cartContext);
  return (
    <div className={classes.carte}>
      <Image src={image} alt="a" width="75" height="100" />
      <p>${pr}</p>
      <button onClick={() => addAmount(id)}>+</button>
      <p>{amount}</p>
      <button onClick={() => removeAmount(id)}>-</button>
      <p className={classes.para}>${(pr * amount).toFixed(2)}</p>

      <button onClick={() => removeProduct(id)}>remove</button>
    </div>
  );
}

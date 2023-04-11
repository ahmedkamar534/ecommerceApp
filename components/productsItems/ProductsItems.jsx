import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import cartContext from "../store/Context";
import classes from "./pros.module.css";

export default function ProductsItems({ product }) {
  let { addProducts } = useContext(cartContext);
  const [amount, setamount] = useState(1);
  const { category, title, price, id, image } = product;
  const pr = price.toFixed(2);

  const addHandeler = () => {
    let myAmount = amount;
    if (amount === 10) return;
    setamount(myAmount + 1);
  };
  const removeHandeler = () => {
    let myAmount = amount;
    if (amount === 1) return;
    setamount(myAmount - 1);
  };

  const clickHandeler = () => {
    let newpro = {
      id,
      title,
      price,
      image,
      amount,
    };
    addProducts(newpro);

    setamount(1);
  };
  return (
    <div className="col-6 col-md-3 col-lg-2 pt-5 text-center  ">
      <div className={classes.product}>
        <Image
          src={image}
          alt={title}
          width="120"
          height="180"
          priority={true}
        />
        <h3 className="h6 h-100">{title}</h3>

        <p>${pr}</p>
        <p>{category}</p>
        <Link href={"product/" + id}> Details</Link>

        <div>
          <button onClick={addHandeler}>+</button>
          <span>{amount}</span>
          <button onClick={removeHandeler}>-</button>
        </div>
        <button onClick={clickHandeler}>Buy</button>
      </div>
    </div>
  );
}

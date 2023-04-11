import React, { useContext } from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";
import cartContext from "../store/Context";

export default function Navbar() {
  let { products, warn } = useContext(cartContext);
  return (
    <nav className={classes.nav}>
      <div className={classes.navcont + " container"}>
        <div className={classes.logo}>LOGO</div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/cart">
              Cart <span>{products.length}</span>
            </Link>
          </li>
        </ul>
      </div>
      {warn ? <p className={classes.warn}>item already exist</p> : ""}
    </nav>
  );
}

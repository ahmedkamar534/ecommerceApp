import axios from "axios";
import React from "react";
import Products from "../../components/products/Products";

export default function index(props) {
  return <Products products={props.products} />;
}

export async function getStaticProps() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      products: data,
    },
  };
}

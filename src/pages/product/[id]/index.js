import axios from "axios";
import React from "react";
import ProductDetails from "../../../../components/productDetails/ProductDetails";

export default function index(props) {
  return <ProductDetails product={props.product} />;
}

export async function getStaticPaths() {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  const paths = data.map((pro) => {
    return {
      params: { id: pro.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { data } = await axios("https://fakestoreapi.com/products/" + id);
  return {
    props: {
      product: data,
    },
  };
}

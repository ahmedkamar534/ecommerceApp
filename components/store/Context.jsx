import React, { createContext, useEffect, useState } from "react";

const cartContext = createContext([]);

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const [warn, setWarn] = useState(false);
  //
  const removeProduct = (id) => {
    let newArr = products.filter((product) => product.id !== id);
    setProducts(newArr);
  };
  //
  const addProducts = (pro) => {
    let id = false;
    products.forEach((product) => {
      if (product.id === pro.id) {
        id = true;
      }
    });
    if (id) {
      setWarn(true);
      setTimeout(() => {
        setWarn(false);
      }, 2000);

      return;
    }
    setProducts((prevProducts) => {
      return [{ ...pro }, ...prevProducts];
    });
  };

  //
  const removeAmount = (id) => {
    let ind = 0;
    products.forEach((product, index) => {
      if (product.id === id) ind = index;
    });
    let newProducts = products;
    if (newProducts[ind].amount === 1) {
      return;
    }
    newProducts[ind].amount -= 1;
    setProducts([...newProducts]);
  };

  //
  const addAmount = (id) => {
    let ind = 0;
    products.forEach((product, index) => {
      if (product.id === id) ind = index;
    });
    let newProducts = products;
    if (newProducts[ind].amount === 20) {
      return;
    }
    newProducts[ind].amount += 1;
    setProducts([...newProducts]);
  };
  return (
    <cartContext.Provider
      value={{
        addProducts,
        products,
        removeProduct,

        warn,
        addAmount,
        removeAmount,
      }}>
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;

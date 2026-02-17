import React, { useState } from 'react';
import ProductList from './ProductList';
import Loader from './Loader';

const PRODUCTS = [
  { id: 1, name: "Laptop", price: 80000, inStock: true },
  { id: 2, name: "Mouse", price: 800, inStock: false },
  { id: 3, name: "Keyboard", price: 1500, inStock: true }
];

export default function App() {
  const [status, setStatus] = useState("idle");
  // created using 3 states => idle | loading | loaded  

  function startLoading() {
    setStatus("loading");

    setTimeout(() => {
      setStatus("loaded");
    }, 2000);
  }

  if (status === "idle") {
    return (
      <button onClick={startLoading}>
        Load Products
      </button>
    );
  }

  if (status === "loading") {
    return <Loader />;
  }

  return <ProductList products={PRODUCTS} />;
}

import React from "react";
import './ProductCardCSS.css';

export default function ProductCard ({ cardDetails}){
   return (
    <>
      <section className="product-card">
         <p>{cardDetails.name}</p>
         <p>{cardDetails.price}</p>
         <p>{cardDetails.inStock ? <span className="in-stock"><b>Available</b></span> : <span className="out-of-stock"><b>Out of Stock</b></span>}</p>
      </section>
    </>
   )
}

import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({products}){
 
    return (
        <>
        <section >
         {
           products.length>0 ? products.map( product=> <ProductCard key={product.id} cardDetails={product}/>) : 
           <span>No Products Available</span>
         }
         </section>
        </>
    )
}



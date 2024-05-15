import React, { useState, useEffect } from "react";
import Products from "../Products/Products";


const WomenCloths = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      if (res.ok) {
        let products = await res.json();
        setProducts(products);
        console.log(products);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Products products={products} category={"Women's Clothing"} />;
};

export default WomenCloths;

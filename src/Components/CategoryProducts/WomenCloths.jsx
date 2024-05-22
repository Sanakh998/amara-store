import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import Loading from "../Loading/Loading";



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
      }else{
        throw new Error("Something went Wrong Please Try Again")
      }
    } catch (error) {
      setError("Please Check Your Internet Connection and Try Again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if(loading){
    return <Loading/>
  }else if (error){
    return <div>{error}</div>
  }

  return <Products products={products} category={"Women's Clothing"} />;
};

export default WomenCloths;

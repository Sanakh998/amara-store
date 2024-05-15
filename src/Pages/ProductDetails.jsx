import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await fetch("https://fakestoreapi.com/products/" + id);
      if (res.ok) {
        let product = await res.json();
        setProduct(product);
        console.log(product);
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

  if(product){

    return (
      <div>
      <h1>ProductDetails{id}</h1>
      <p>{product.price}</p>
    </div>
  );
};
}

export default ProductDetails;

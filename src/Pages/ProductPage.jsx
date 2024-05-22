import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../Components/Products/ProductDetails";
import Loading from '../Components/Loading/Loading'
import BackButton from "../Components/Buttons/BackButton";

const ProductPage = () => {
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
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {

  } else {
    return (
      <div className="container-fluid">
        <BackButton/>
        {loading && <Loading/>}
        {product && <ProductDetails product={product} />}
      </div>
    );
  }
};

export default ProductPage;

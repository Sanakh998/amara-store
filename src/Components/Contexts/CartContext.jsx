import { createContext, useEffect, useState } from "react";

export const  CartContext = createContext();

export default function CartProvider ({children}) {
  const [cart, setCart] = useState([]);
  const [isCarted, setIsCarted] = useState(false)
  const fetchData = async (id) => {
    let res = await fetch ("https://fakestoreapi.com/products/" + id);
    let product = await res.json();
    return product;
  }
  const addToCart = async (id) => {
    let product = await fetchData(id);
    setCart((prevCart)=> [...prevCart, product])
    setIsCarted(true)

  }

  const removeFromCart = async (id) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== id))
    setIsCarted(false)

  }

  useEffect(()=>{
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, isCarted}}>
      {children}

    </CartContext.Provider>
  )
};



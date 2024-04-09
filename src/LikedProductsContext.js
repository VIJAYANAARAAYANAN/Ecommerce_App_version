// LikedProductsContext.js
import React, { createContext, useState, useContext } from 'react';

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [productId]: !prevLikedProducts[productId] || false,
    }));
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => useContext(LikedProductsContext);

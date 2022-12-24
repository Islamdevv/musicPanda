import React, { createContext, useState } from "react";

export const cardContext = createContext();
const MusicCardContext = ({ children }) => {
  //!myList
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("music-data"))
  );

  const addMusicToCart = (music) => {
    let data = JSON.parse(localStorage.getItem("music-data")) || [];
    data.push(music);
    localStorage.setItem("music-data", JSON.stringify(data));
  };
  const getMusicToCart = () => {
    if (!localStorage.getItem("music-data")) {
      localStorage.setItem("music-data", "[]");
    }
    let cart = JSON.parse(localStorage.getItem("music-data"));
    setCartData(cart);
  };
  function deleteMusicToCart(id) {
    let cart = JSON.parse(localStorage.getItem("music-data"));
    cart = cart.filter((elem) => elem.id !== id);
    localStorage.setItem("music-data", JSON.stringify(cart));
    getMusicToCart();
  }
  const values = {
    cartData,
    addMusicToCart,
    deleteMusicToCart,
    getMusicToCart,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};
export default MusicCardContext;

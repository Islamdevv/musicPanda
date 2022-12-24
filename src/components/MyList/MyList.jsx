import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cardContext } from "../../context/MusicCardContext";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { cartData, getMusicToCart } = useContext(cardContext);
  useEffect(() => {
    getMusicToCart();
  }, []);
  console.log(cartData);
  return (
    <Box sx={{ marginBottom: "105px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cartData ? (
          cartData.map((item) => <MyListCard key={item.id} item={item} />)
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default MyList;

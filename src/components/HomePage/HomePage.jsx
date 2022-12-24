import { Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div style={{ marginTop: "-10px" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Слушайте миллионы треков, бесплатно!
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;

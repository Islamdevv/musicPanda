import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { cardContext } from "../../context/MusicCardContext";

const MyListCard = ({ item }) => {
  const { deleteMusicToCart } = useContext(cardContext);

  return (
    <Box className="spotify-playlists">
      <Box
        className="list"
        sx={{
          flexWrap: "wrap",
        }}
      >
        <Box className="item">
          <img
            src={item.img}
            alt=""
            style={{ width: "140px", height: "150px" }}
          />
          {/* </Button> */}
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "15px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            {item.executor}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "15px",
              fontSize: "12px",
              color: "#747272",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Typography>
          <Box>
            <div className="play">
              <div
                style={{
                  alignItems: "center",
                  maxHeight: "8px",
                  maxWidth: "8px",
                }}
                className="fa fa-play"
              >
                <PlayArrowIcon sx={{ marginTop: "-8px", marginLeft: "-7px" }} />
              </div>
              <Button
                sx={{ fontSize: "10px" }}
                onClick={() => {
                  deleteMusicToCart(item.id);
                }}
              >
                delete
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyListCard;

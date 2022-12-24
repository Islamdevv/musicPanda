import { Box, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { musicContext } from "../../context/MusicContextProvider";
import MusicCard from "../MusicCard/MusicCard";
import PaginationMusic from "../PaginationMusic/PaginationMusic";
import Player from "../Player/Player";
import "./MusicList.css";

const MusicList = () => {
  const { data, getMusic, currentData } = useContext(musicContext);
  const { handleLogout, user } = useAuth();
  useEffect(() => {
    getMusic();
  }, []);

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          marginTop: "-5%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "80%",
          marginLeft: "18%",
        }}
      >
        {data ? (
          currentData().map((item) => <MusicCard key={item.id} item={item} />)
        ) : (
          <></>
        )}
      </Box>
      <Player />
    </Box>
    // </Box>
  );
};
export default MusicList;

import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { musicContext, useMusic } from "../../context/MusicContextProvider";
import "./AddMusic.css";
const AddMusic = () => {
  const { addMusic } = useMusic(musicContext);
  const [music, setMusic] = useState({
    name: "",
    img: "",
    executor: "",
    music: "",
  });
  const handleInp = (e) => {
    let obj = { ...music, [e.target.name]: e.target.value };
    setMusic(obj);
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Box className="login-box">
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          ADD MUSIC
        </Typography>
        <Box className="user-box">
          <TextField
            onChange={handleInp}
            className="input"
            placeholder="name"
            name="name"
            sx={{ marginBottom: "20px" }}
          />
        </Box>
        <Box className="user-box">
          <TextField
            onChange={handleInp}
            className="input"
            placeholder="img"
            name="img"
            sx={{ marginBottom: "20px" }}
          />
        </Box>
        <Box className="user-box">
          <TextField
            onChange={handleInp}
            className="input"
            placeholder="executor"
            name="executor"
            sx={{ marginBottom: "20px" }}
          />
        </Box>
        <Box className="user-box">
          <TextField
            onChange={handleInp}
            className="input"
            placeholder="music"
            name="music"
            sx={{ marginBottom: "20px" }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              addMusic(music);
              navigate("/musiclist");
            }}
            sx={{
              width: "50%",
              height: "50px",
              color: "black",
              backgroundColor: "#fff",
              fontSize: "20px",
              transition: "1000s",
              fontWeight: "bold",
            }}
          >
            ENTER
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddMusic;

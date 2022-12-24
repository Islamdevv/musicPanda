import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { musicContext } from "../../context/MusicContextProvider";

const UpdateMusic = () => {
  const { updateMusic, getOneMusic, oneMusic } = useContext(musicContext);
  const params = useParams();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [executor, setExecutor] = useState("");
  const [music, setMusic] = useState("");

  useEffect(() => {
    getOneMusic(params.id);
  }, []);

  useEffect(() => {
    if (oneMusic) {
      setName(oneMusic.name);
      setImg(oneMusic.img);
      setExecutor(oneMusic.executor);
      setMusic(oneMusic.music);
    }
  }, [oneMusic]);

  const handleValues = () => {
    const editMusic = {
      name,
      img,
      executor,
      music,
    };

    updateMusic(params.id, editMusic);
    setName("");
    setImg("");
    setExecutor("");
    setMusic("");
  };
  const navigate = useNavigate();

  return (
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
        UPDATE MUSIC
      </Typography>
      <Box className="user-box">
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input"
          placeholder="name"
          name="name"
          sx={{ marginBottom: "20px" }}
        />
      </Box>
      <Box className="user-box">
        <TextField
          onChange={(e) => setImg(e.target.value)}
          value={img}
          className="input"
          placeholder="img"
          name="img"
          sx={{ marginBottom: "20px" }}
        />
      </Box>
      <Box className="user-box">
        <TextField
          onChange={(e) => setExecutor(e.target.value)}
          value={executor}
          className="input"
          placeholder="executor"
          name="executor"
          sx={{ marginBottom: "20px" }}
        />
      </Box>
      <Box className="user-box">
        <TextField
          onChange={(e) => setMusic(e.target.value)}
          value={music}
          className="input"
          placeholder="music"
          name="music"
          sx={{ marginBottom: "20px" }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            handleValues();
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
  );
};

export default UpdateMusic;

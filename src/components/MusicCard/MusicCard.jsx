import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { musicContext } from "../../context/MusicContextProvider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./MusicCard.css";
import { cardContext } from "../../context/MusicCardContext";
import { useAuth } from "../../context/AuthContextProvider";

const MusicCard = ({ item }) => {
  const { getMusic, getOneMusic, data, deleteMusic, oneMusic } =
    useContext(musicContext);
  const { getMusicToCart, addMusicToCart } = useContext(cardContext);

  const { id } = useParams();
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate(id);
  const ADMIN = "adminxxx@gmail.com";
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
                <PlayArrowIcon
                  sx={{ marginTop: "-20px", marginLeft: "-8px" }}
                />
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {email == ADMIN && (
                  <>
                    <Button
                      sx={{ fontSize: "7px" }}
                      onClick={() => navigate(`/update/${item.id}`)}
                    >
                      update
                    </Button>
                    <Button
                      sx={{ fontSize: "7px" }}
                      onClick={() => deleteMusic(item.id)}
                    >
                      delete
                    </Button>
                  </>
                )}

                <Button
                  sx={{ fontSize: "7px" }}
                  onClick={() => {
                    addMusicToCart(item);
                    getMusicToCart();
                  }}
                >
                  like
                </Button>
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicCard;

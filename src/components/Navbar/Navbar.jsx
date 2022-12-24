import { Divider } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PaginationMusic from "../PaginationMusic/PaginationMusic";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sidebar">
        <div style={{ display: "flex" }} className="logo">
          <p className="panda">Panda</p>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="/">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  <HomeIcon sx={{ fontSize: "32px", margin: "10px" }} />
                  Главная
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <div style={{ display: "flex" }}>
                  <SearchIcon sx={{ fontSize: "32px", margin: "10px" }} />
                  <input
                    type="text"
                    placeholder="search"
                    style={{
                      marginTop: "10px",
                      width: "70%",
                      height: "20px",
                      borderRadius: "10px",
                      border: "5px white solid",
                    }}
                  />
                </div>
              </a>
            </li>

            <li>
              <a href="/musiclist">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  <LibraryMusicIcon sx={{ fontSize: "32px", margin: "10px" }} />
                  Песни
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="/addmusic">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{ fontSize: "32px", margin: "10px" }}
                  />
                  Создать трек
                </div>
              </a>
            </li>

            <li>
              <a href="/mylist">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  <FavoriteIcon sx={{ fontSize: "32px", margin: "10px" }} />
                  Любимые треки
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Divider
          sx={{
            width: "95%",
            marginTop: "-35px",
            border: "1px solid",
            backgroundColor: "#fff",
          }}
        ></Divider>
        <div className="policies">
          <ul>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <div className="topbar">
          <div className="prev-next-buttons">
            <PaginationMusic />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className="divider">|</li>
            </ul>
            <button onClick={() => navigate("/auth")} type="button">
              Вход
            </button>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Navbar;

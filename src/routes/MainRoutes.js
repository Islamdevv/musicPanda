import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddMusic from "../components/AddMusic/AddMusic";
import Auth from "../components/Auth/Auth";
import HomePage from "../components/HomePage/HomePage";
import MusicList from "../components/MusicList/MusicList";
import MyList from "../components/MyList/MyList";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Player from "../components/Player/Player";
import UpdateMusic from "../components/UpdateMusic/UpdateMusic";
import { ADMIN } from "../const";
import { useAuth } from "../context/AuthContextProvider";

const MainRoutes = () => {
  const { user } = useAuth();

  const PUBLIC = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/musiclist", element: <MusicList />, id: 2 },
    { link: "/mylist", element: <MyList />, id: 3 },
    { link: "/auth", element: <Auth />, id: 4 },
    { link: "/player/:id", element: <Player />, id: 6 },
    { link: "*", element: <NotFoundPage />, id: 6 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/update/:id", element: <UpdateMusic />, id: 5 },
    { link: "/addmusic", element: <AddMusic />, id: 4 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;

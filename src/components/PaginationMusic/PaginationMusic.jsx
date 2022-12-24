import { Box, Pagination, Stack } from "@mui/material";
import React, { useContext } from "react";
import { musicContext } from "../../context/MusicContextProvider";

const PaginationMusic = () => {
  const { page, count, setPage } = useContext(musicContext);
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <Box
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} sx={{ marginTop: "-9%" }}>
        <Pagination
          onChange={handleChange}
          sx={{ button: { color: "#fff" } }}
          count={count}
          color="secondary"
          size="small"
        />
      </Stack>
    </Box>
  );
};

export default PaginationMusic;

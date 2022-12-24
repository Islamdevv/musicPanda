import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { musicContext } from "../../context/MusicContextProvider";

export default function MusicSort() {
  const { fetchByParams } = React.useContext(musicContext);
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: 120,
        marginLeft: {
          xs: "30px",
          sm: "30px",
          md: "0",
          lg: "15px",
          xl: "0",
        },
      }}
    >
      <FormControl>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ color: "red" }}
        >
          Sort By Type
        </InputLabel>
        <NativeSelect
          sx={{
            color: "red",
            fontSize: "20px",
          }}
          onChange={(e) => fetchByParams("type", e.target.value)}
          defaultValue={"All"}
          inputProps={{
            name: "sort",
          }}
        >
          <option value={"All"}>All</option>
          <option value={"Fantasy"}>Fantasy</option>
          <option value={"Comedy"}>Comedy</option>
          <option value={"Detective"}>Detective</option>
          <option value={"Crime"}>Crime</option>
          <option value={"Historical"}>Historical</option>
          <option value={"Adventure"}>Adventure</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import CvtToRom from "../Controller/FunctionCvtToRom";
import CvtToNum from "../Controller/FunctionCvtToNum";

import "../Vue/Interface.Css";

function Interface() {
  //valeur de départ -- valeur Romaine
  const [value, setValue] = React.useState(0);
  const [result, setResult] = React.useState("--");

  //fonction de modification de mes éléments textes
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      
    </Box>
  );
}

export default Interface;

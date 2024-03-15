//Import React components
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

//Import Images et icons
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

//Import Function
import CvtToRom from "../Controller/FunctionCvtToRom";
import CvtToNum from "../Controller/FunctionCvtToNum";

import "../Vue/Interface.Css";

function Interface() {
  //valeur de départ -- valeur Romaine
  const [value, setValue] = React.useState(0);
  const [result, setResult] = React.useState("--");

  //fonction de modification de mon chiffre
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  //fonction de modification de mon chiffre
  const handleChangeResult = (e) => {
    setResult(e.target.value);
  };

  //fonction de clique sur mon Bouton de conversion vers Chiffre Romain
  const handleCvtRom = () => {
    setResult(CvtToRom(value));
  };

  //fonction de clique sur mon bouton de conversion vers Chiffre numérique
  const handleCvtNum = () => {
    console.log(result);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <TextField
            id="numberToCvt"
            data-testid="numberToCvt"
            value={value}
            variant="outlined"
            onChange={handleChangeValue}
            sx={{ color: "white", background: "white", borderRadius: "5px" }}
            inputProps={{
              inputMode: "numeric",
            }}
          />
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Button
            variant="outlined"
            data-testid="btnNum"
            onClick={handleCvtRom}
          >
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Button
            variant="outlined"
            data-testid="btnRom"
            onClick={handleCvtNum}
          >
            <KeyboardDoubleArrowLeftIcon />
          </Button>
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2}>
          <TextField
            id="Rom"
            data-testid="Rom"
            variant="outlined"
            value={result}
            onChange={handleChangeResult}
            sx={{ color: "white", background: "white", borderRadius: "5px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Interface;

import * as React from "react";

//import material library
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//import image et logo
import LogoSPQR from "../Ressources/LogoSPQR.png";

function BarMenu() {
  //Affichage du ToolBar
  return (
    <AppBar position="fixed">
      <Toolbar
        variant="dense"
        sx={{
          background: "linear-gradient(to bottom, #565656, #858585, #D8D8D8)",
        }}
      >
        <img
          src={LogoSPQR}
          style={{ width: "5%", height: "5%", margin: "1%" }}
        ></img>
        <Typography variant="h6" color="inherit" component="div">
          Wemanity || Convertion en chiffre romain
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default BarMenu;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

//Composant pour la conversion
import InterFace from "../Components/Interface";

function Content() {
  /* const cardComp = ({ letter, definition }) => {
    return (
      <React.Fragment>
        <Card
          variant="outlined"
          sx={{ border: "1px solid black", borderRadius: "5px" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <span style={{ fontSize: "25px" }}>{letter} </span> Correspond à{" "}
              {definition}
            </Typography>
            <Typography variant="h5" component="div"></Typography>

            <Typography variant="body2"></Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };
 */
  return (
    <div>
      <p
        className="presentation"
        style={{
          color: "black",
          fontSize: "18px",
          display: "flex",
          justifyContent: "right",
          textAlign: "left",
          top: "2%",
          margin: "5%",
        }}
      >
        Les Romains étaient une bande intelligente. Ils ont conquis la majeure
        partie de l’Europe et l’ont gouvernée pendant des centaines d’années.
        Ils ont inventé des routes bétonnées et droites et même des bikinis [1]
        . Une chose qu’ils n’ont jamais découverte, c’est le chiffre zéro. Cela
        a rendu légèrement plus difficile l’écriture et la datation d’histoires
        détaillées de leurs exploits, mais le système de chiffres qu’ils ont mis
        au point est toujours utilisé aujourd’hui. Par exemple, la BBC utilise
        des chiffres romains pour dater ses programmes.
      </p>

      <Grid container spacing={2}>
        {/* <Grid container spacing={2} direction="column" sx={{ width: "20%" }}>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "I", definition: "1" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "V", definition: "5" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "X", definition: "10" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "L", definition: "50" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "C", definition: "100" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "D", definition: "500" })}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            {cardComp({ letter: "M", definition: "1000" })}
          </Grid>
        </Grid> */}

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <InterFace />
        </Grid>
      </Grid>
    </div>
  );
}
export default Content;

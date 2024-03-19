import * as React from "react";

//import material library
import { Grid } from "@mui/material";

//Composant pour la conversion
import InterFace from "../Components/Interface";

function Content() {
  return (
    <div>
      {/* ----- Affichage enTête ----- */}
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

      {/* ----- ----- ----- */}

      {/* ----- Affichage outil de conversion ----- */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <InterFace />
        </Grid>
      </Grid>
      {/* ----- ----- ----- */}
    </div>
  );
}
export default Content;

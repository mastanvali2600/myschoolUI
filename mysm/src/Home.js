import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function Home() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={11}
    >
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "12rem", height: "10rem" }}
      >
        <img src="./images/faculty.png" alt="golff" />
        Principal
      </Box>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "12rem", height: "10rem" }}
      >
        Faculty
      </Box>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "12rem", height: "10rem" }}
      >
        Parent
      </Box>
    </Grid>
  );
}

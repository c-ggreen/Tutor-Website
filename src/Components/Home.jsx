import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import bees from "../Images/bees2.jpg";

function Home() {
  return (
    <Container maxWidth="lg" style={{ marginTop: "5%" }}>
      <Grid container justifyContent="center" alignItems="center">
        <img src={bees} alt="" style={{ zIndex: "-1" }} />
      </Grid>
    </Container>
  );
}

export default Home;

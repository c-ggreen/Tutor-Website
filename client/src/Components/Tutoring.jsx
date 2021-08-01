import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";

function Tutoring() {
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "5%", border: "solid red 1px" }}
    >
      <Grid container justifyContent="center" alignItems="center">
          <Typography variant="h4">
              Tutoring
          </Typography>
      </Grid>
    </Container>
  );
}

export default Tutoring;

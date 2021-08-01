import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import bees from "../Images/bees2.jpg";

function Home() {
  return (
    <div>

    {/* <Container maxWidth="lg" style={{ marginTop: "5%" }} > */}
      {/* <Grid container justifyContent="center" alignItems="center"> */}
        <img src={bees} alt="" className="homeImg"/>
      {/* </Grid> */}
        <h1  style={{zIndex:"1"}}>Home</h1>
    {/* </Container> */}
    </div>
  );
}

export default Home;

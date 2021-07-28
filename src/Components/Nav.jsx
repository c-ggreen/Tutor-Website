import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid
} from "@material-ui/core";

function Nav() {
  return (
    <div>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h6">Zee's Bees Tutoring</Typography>
          <Grid container justify="flex-end" xs="10">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Tutoring</Button>
            <Button>FAQ</Button>
            <Button>Contact</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;

import React from "react";
import ServItem from "../ServItem";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles((theme) => ({
  wrapper: {
    width: "90%",
    margin: "0 auto",
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  s: {
    marginBottom: "26%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "2.42rem",
    },
  },
}));

function Services() {
  const classes = styles();
  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid item>
        <Typography variant="h2" className={classes.s}>
          Services
        </Typography>
      </Grid>
      <Grid item>
        <ServItem serv="true" />
      </Grid>
    </Grid>
  );
}

export default Services;

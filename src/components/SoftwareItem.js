import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import sbg from "../assets/background.jpg";
import sbgm from "../assets/mobileBackground.jpg";
const styles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    color: "#ffff",
    borderRadius: "50px",
    height: "45px",
  },
  learnMore: {
    color: theme.palette.common.blue,
    borderRadius: "50px",
    textTransform: "none",
    borderColor: theme.palette.common.blue,
    height: "45px",
  },
  software: {
    height: "100vh",
    width: "100vw",
    background: `url(${sbg}) center center/cover no-repeat`,
    [theme.breakpoints.down("sm")]: {
      background: `url(${sbgm}) center center/cover no-repeat`,
    },

    backgroundRepeat: "no-repeat",
  },
  whiteColor: {
    color: "white",
  },
  contWrap1: {
    width: "auto",
    height: "10rem",
    flexWrap: "nowrap",
  },
}));
function SoftwareItem() {
  const classes = styles();
  return (
    <Grid item container className={classes.software}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={"8"}
        sm={"6"}
        xs={"12"}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          className={classes.contWrap1}
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h4">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.whiteColor}>
              Take advantage of the 21st Century.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              component={Link}
              to={"/CustomSoftware"}
              className={classes.learnMore}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={"4"}
        sm={"6"}
        xs={"12"}
      >
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            color="secondary"
            component={Link}
            to={"/Estimate"}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SoftwareItem;

import React from "react";
import Lottie from "react-lottie-player";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import animationData from "../../animations/landinganimation/data";
import ServItem from "../ServItem";
import SoftwareItem from "../SoftwareItem";
import rbg from "../../assets/repeatingBackground.svg";
import ibg from "../../assets/infoBackground.svg";

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
  learnMoreWhite: {
    color: "white",
    borderRadius: "50px",
    textTransform: "none",
    borderColor: "white",
    height: "45px",
  },
  aboutContact: {
    height: "100vh",
    width: "100vw",
    background: `url(${ibg}) center center/cover no-repeat`,
    [theme.breakpoints.down("md")]: {
      direction: "column",
    },
  },
  buttons: {
    width: "280px",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      marginBottom: "5%",
    },
  },
  title: {
    textAlign: "left",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      textAlign: "center",
    },
  },
  revolutionCard: {
    height: "55vh",
    width: "70vw",
    padding: "50px",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      height: "55vh",
      width: "75vw",
      padding: "30px",
    },
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.32)",
    borderRadius: "29px",
  },
  revolution: {
    height: "100vh",
    width: "100vw",
    background: `url(${rbg}) center center/cover no-repeat`,
    marginTop: "5%",
  },
  learnGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
  },
  whiteColor: {
    color: "white",
  },
  cardSubtitle: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85rem",
    },
  },
  contWrap: {
    width: "auto",
    height: "7.4rem",
    flexWrap: "nowrap",
  },
  revtext: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.68rem",
    },
  },
  contWrapcont: {
    width: "auto",
    height: "7.4rem",
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  contWrap1: {
    width: "auto",
    height: "10rem",
    flexWrap: "nowrap",
  },
  homeFirstGrid: {
    height: "100vh",
    width: "100vw",
    flexWrap: "nowrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      marginBottom: "10%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "67vh",
      alignItems: "flex-end",
    },
    [theme.breakpoints.down("xs")]: {
      height: "86vh",
      paddingTop: "7%",
    },
  },
}));

function Home() {
  const classes = styles();
  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        container
        direction="row"
        item
        alignItems="center"
        className={classes.homeFirstGrid}
      >
        <Grid lg={"6"} item container direction="column" alignItems="center">
          <Grid container item alignItems="center" justify="center">
            <Typography variant="h3" className={classes.title}>
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.buttons}
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
            <Grid item>
              <Grid item className={classes.learnGrid}>
                <Button
                  variant="outlined"
                  component={Link}
                  to={"/"}
                  className={classes.learnMore}
                >
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={"6"} md={"6"} sm={"7"} xs={"9"} item>
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <ServItem />
      <Grid
        item
        container
        className={classes.revolution}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          className={classes.revolutionCard}
          alignItems="center"
          direction="column"
          justify="space-evenly"
        >
          <Grid item>
            <Typography variant="h5" className={classes.revtext}>
              The Revolution
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.cardSubtitle}>
              Visionary insights coupled with cutting-edge technology is a<br />
              recipe for revolution.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to={"/Revolution"}
              variant="outlined"
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
        className={classes.aboutContact}
        direction="row"
        justify="space-between"
      >
        <Grid
          item
          container
          lg={"3"}
          sm={"6"}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            container
            direction="column"
            alignItems="flex-start"
            className={classes.contWrap}
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" className={classes.whiteColor}>
                About Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.whiteColor}>
                Let’s get personal.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to={"/About"}
                variant="outlined"
                className={classes.learnMoreWhite}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={"3"}
          sm={"6"}
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            container
            direction="column"
            alignItems="flex-end"
            className={classes.contWrapcont}
            justify="space-between"
          >
            <Grid item>
              <Typography variant="h4" className={classes.whiteColor}>
                Contact Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.whiteColor}>
                Say hello! 👋🏻
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                component={Link}
                to={"/Contact"}
                className={classes.learnMoreWhite}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SoftwareItem />
    </Grid>
  );
}

export default Home;

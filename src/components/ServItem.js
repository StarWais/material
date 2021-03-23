import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import sficon from "../assets/Custom Software Icon.svg";
import { Link } from "react-router-dom";
import mobicon from "../assets/mobileIcon.svg";
import monitoricon from "../assets/websiteIcon.svg";

const styles = makeStyles((theme) => ({
  servitem: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    flexWrap: "nowrap",
  },
  services: {
    width: "90%",
  },
  servicesImg: {
    marginLeft: "20px",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      height: "70%",
      margin: "0 auto 8% auto",
    },
  },
  servicesDivider: {
    marginBottom: "10px",
  },
  servicesSpan: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
    fontSize: "1.15rem",
  },
  learnMoreServices: {
    color: theme.palette.common.blue,
    borderRadius: "50px",
    textTransform: "none",
    borderColor: theme.palette.common.blue,
    height: "30px",
    marginTop: "18px",
    [theme.breakpoints.down("sm")]: {},
  },
  learnGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
    },
  },
}));
function ServItem({ serv = false }) {
  const classes = styles();
  return (
    <Grid
      item
      container
      direction="column"
      className={!serv ? classes.services : null}
      spacing={"10"}
    >
      <Grid
        item
        container
        direction="row"
        className={classes.servitem}
        justify={serv ? "flex-end" : "flex-start"}
      >
        <Grid item>
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1">
            <div className={classes.servicesDivider}>
              Save Energy. Save Time. Save Money. <br />
            </div>
            Complete digital solutions, from investigation
            <br /> to <span className={classes.servicesSpan}>celebration</span>.
          </Typography>
          <Grid item className={classes.learnGrid}>
            <Button
              variant="outlined"
              component={Link}
              to={"/CustomSoftware"}
              className={classes.learnMoreServices}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <img src={sficon} alt="services" className={classes.servicesImg} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.servitem}
        justify={serv ? "flex-start" : "flex-end"}
      >
        <Grid item>
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1">
            <div className={classes.servicesDivider}>
              Extend Functionality. Extend Access. Increase Engagement. <br />
            </div>
            Integrate your web experience or create a standalone app <br />
            with either mobile platform.
          </Typography>
          <Grid item className={classes.learnGrid}>
            <Button
              variant="outlined"
              component={Link}
              to={"/MobileApps"}
              className={classes.learnMoreServices}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <img src={mobicon} alt="services" className={classes.servicesImg} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.servitem}
        justify={serv ? "flex-end" : "flex-start"}
      >
        <Grid item>
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1">
            <div className={classes.servicesDivider}>
              Reach More. Discover More. Sell more.
              <br />
            </div>
            Optimized for Search Engines, built for speed.
          </Typography>
          <Grid item>
            <Grid item className={classes.learnGrid}>
              <Button
                component={Link}
                to={"/Websites"}
                variant="outlined"
                className={classes.learnMoreServices}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={monitoricon}
            alt="services1"
            className={classes.servicesImg}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ServItem;

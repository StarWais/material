import React from "react";
import { makeStyles } from "@material-ui/styles";
import footerPic from "../../assets/Footer Adornment.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Grid, Button, Hidden, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    display: "flex",
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10rem",
    },
  },
  footerPic: {
    width: "25em",
    [theme.breakpoints.down("md")]: {
      width: "9em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "16em",
      marginRight: "10vw",
    },
    height: "100%",
  },
  footerGrid: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  footerIcon: {
    color: "white",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  footerIcons: {
    position: "absolute",
    left: "89%",
    bottom: "10px",
  },
  footerButton: {
    color: "#f7f7f7",
    textAlign: "left",
    fontSize: "0.75rem",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.65rem",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
    justifyContent: "flex-start",
  },
}));

function Footer() {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <img src={footerPic} className={classes.footerPic} alt="footer" />
      <Grid
        container
        direction="row"
        className={classes.footerGrid}
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs>
          <Button
            disableRipple
            component={Link}
            to={"/"}
            className={classes.footerButton}
          >
            Home
          </Button>
        </Grid>
        <Grid container item xs alignItems="flex-start" direction="column">
          <Grid item>
            <Button
              disableRipple
              component={Link}
              to={"/Services"}
              className={classes.footerButton}
            >
              Services
            </Button>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Button
                disableRipple
                component={Link}
                to={"/CustomSoftware"}
                className={classes.footerButton}
              >
                Custom Software Development
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableRipple
                component={Link}
                to={"/MobileApps"}
                className={classes.footerButton}
              >
                iOS/Android App Development
              </Button>
            </Grid>
            <Grid item>
              <Button
                disableRipple
                component={Link}
                to={"/Websites"}
                className={classes.footerButton}
              >
                Website Development
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container item xs alignItems="flex-start" direction="column">
          <Grid item>
            <Button
              disableRipple
              component={Link}
              to={"/Revolution"}
              className={classes.footerButton}
            >
              The Revolution
            </Button>
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                Vision
              </Button>
            </Grid>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                Technology
              </Button>
            </Grid>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                Process
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container item xs alignItems="flex-start" direction="column">
          <Grid item>
            <Button
              component={Link}
              to={"/About"}
              disableRipple
              className={classes.footerButton}
            >
              About Us
            </Button>
          </Grid>

          <Hidden mdDown>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                Mission Statement
              </Button>
            </Grid>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                History
              </Button>
            </Grid>
            <Grid item>
              <Button disableRipple className={classes.footerButton}>
                Team
              </Button>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs>
          <Button
            component={Link}
            to={"/Contact"}
            disableRipple
            className={classes.footerButton}
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>

      <Hidden mdDown>
        <Grid container className={classes.footerIcons}>
          <IconButton className={classes.footerIcon}>
            <InstagramIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <FacebookIcon />
          </IconButton>
        </Grid>
      </Hidden>
    </footer>
  );
}

export default Footer;

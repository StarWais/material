import React from "react";
import {
  Grid,
  Hidden,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import fa from "../../assets/forwardArrow.svg";
import ba from "../../assets/backArrow.svg";
import phone from "../../assets/iphone.svg";
import knife from "../../assets/swissKnife.svg";
import cube from "../../assets/increaseEngagement.svg";
import papers from "../../assets/extendAccess.svg";
import SoftwareItem from "../SoftwareItem";

const styles = makeStyles((theme) => ({
  arrow: { marginTop: "0.1em" },
  arrowNext: { marginTop: "0.1em", marginLeft: "auto" },
  heading: {
    maxWidth: "40em",
  },
}));
function MobileApps() {
  const classes = styles(),
    theme = useTheme(),
    matchesSm = useMediaQuery(theme.breakpoints.down("sm")),
    matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid item container direction="column">
      <Grid item container style={{ padding: "4em 4em" }}>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/CustomSoftware"
              style={{ marginRight: "1em", marginLeft: "-0.6em" }}
            >
              <img src={ba} alt="backarrow" className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Typography
            variant="h2"
            style={{ paddingBottom: matchesSm ? "0.15em" : "0" }}
          >
            iOS/Android App Development
          </Typography>
          <Typography variant="body2" paragraph>
            Mobile apps allow you to take your tools on the go.
          </Typography>
          <Typography variant="body2" paragraph>
            Whether you want an app for your customers, employees, or yourself,
            we can build cross-platform native solutions for any part of your
            business process. This opens you up to a whole new world of
            possibilities by taking advantage of phone features like the camera,
            GPS, push notifications, and more.
          </Typography>
          <Typography variant="body2" paragraph>
            Convenience. Connection.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item style={{ marginLeft: "auto" }}>
            <IconButton component={Link} to="/Websites">
              <img src={fa} alt="forwardarrow" className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <Grid item container direction="column" md="5">
          <Grid item>
            <Typography variant="h3">Integration</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md="2">
          <img src={phone} alt="phone" />
        </Grid>
        <Grid
          item
          container
          direction="column"
          md="5"
          style={{ paddingTop: matchesSm ? "2em" : "0" }}
        >
          <Grid item>
            <Typography variant="h3" align={matchesSm ? "left" : "right"}>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesSm ? "left" : "right"}
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              align={matchesSm ? "left" : "right"}
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="space-evenly"
        direction="row"
        spacing={matchesXs ? "5" : "0"}
        style={{ padding: "6em 0" }}
      >
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignContent="center"
        >
          <Grid item>
            <Typography variant="h6">Extend Functionality</Typography>
          </Grid>
          <Grid item>
            <img src={knife} alt="knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignContent="center"
        >
          <Grid item>
            <Typography variant="h6" align="center">
              Extend Access
            </Typography>
          </Grid>
          <Grid item container alignItems="center" style={{ height: "190px" }}>
            <img src={papers} alt="papers" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignContent="center"
        >
          <Grid item>
            <Typography variant="h6">Increase Engagement</Typography>
          </Grid>
          <Grid item>
            <img src={cube} alt="cube" />
          </Grid>
        </Grid>
      </Grid>
      <SoftwareItem />
    </Grid>
  );
}

export default MobileApps;

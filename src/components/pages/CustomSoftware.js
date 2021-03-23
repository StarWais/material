import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import fa from "../../assets/forwardArrow.svg";
import ba from "../../assets/backArrow.svg";
import bulb from "../../assets/bulb.svg";
import bell from "../../assets/stopwatch.svg";
import cash from "../../assets/cash.svg";
import animationData from "../../animations/documentsAnimation/data";
import animationData2 from "../../animations/scaleAnimation/data";
import animationData3 from "../../animations/automationAnimation/data";
import animationData4 from "../../animations/uxAnimation/data";
import tree from "../../assets/root.svg";
import SoftwareItem from "../SoftwareItem";

const styles = makeStyles((theme) => ({
  arrow: { marginTop: "0.1em" },
  arrowNext: { marginTop: "0.1em", marginLeft: "auto" },
  heading: {
    maxWidth: "40em",
  },
  treecont: {
    width: "35%",
    height: "35%",
    margin: "0 auto",
    paddingBottom: "1.5em",
    [theme.breakpoints.down("md")]: {
      width: "40%",
      height: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "55%",
      height: "55%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "62%",
      height: "62%",
    },
  },
}));
function CustomSoftware() {
  const classes = styles(),
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("md")),
    matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column">
      <Grid item container style={{ padding: "4em 4em" }}>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/Websites"
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
            Custom Software Development
          </Typography>
          <Typography variant="body2" paragraph>
            Whether we’re replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>
          <Typography variant="body2" paragraph>
            Using regular commercial software leaves you with a lot of stuff you
            don’t need, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography variant="body2" paragraph>
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography variant="body2" paragraph>
            We create exactly what you what, exactly how you want it.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item style={{ marginLeft: "auto" }}>
            <IconButton component={Link} to="/MobileApps">
              <img src={fa} alt="forwardarrow" className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        spacing={matchesSm ? "4" : 0}
        direction="row"
        justify="center"
        style={{ padding: "4em 0" }}
      >
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item style={{ marginTop: "15px" }}>
            <img src={bulb} alt="bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item style={{ marginTop: "15px" }}>
            <img src={bell} alt="bell" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item style={{ marginTop: "15px" }}>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={!matches ? "row" : "column"}
        style={{ padding: "4em 2em" }}
      >
        <Grid
          item
          container
          direction="row"
          alignItems={matches ? "center" : "flex-start"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md container alignItems="center" justify="center">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{
                width: !matches ? "80%" : "45%",
                height: !matches ? "80%" : "45%",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={!matchesSm ? "row" : "column-reverse"}
          alignItems={matches ? "center" : "flex-start"}
          md
        >
          <Grid item md container alignItems="center" justify="center">
            <Lottie
              loop
              animationData={animationData2}
              play
              style={{
                width: !matches ? "80%" : "45%",
                height: !matches ? "80%" : "45%",
              }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={!matchesSm ? "right" : "left"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={!matchesSm ? "right" : "left"}
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item className={classes.treecont}>
          <img src={tree} alt="tree" />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            style={{ paddingBottom: "0.5em" }}
          >
            Root-Cause Analysis
          </Typography>
        </Grid>
        <Grid item className={classes.treecont}>
          <Typography variant="body2" paragraph align="center">
            Many problems are merely symptoms of larger, underlying issues
            <br />
            <br />
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={!matches ? "row" : "column"}
        style={{ padding: "4em 2em" }}
      >
        <Grid
          item
          container
          direction="row"
          alignItems={matches ? "center" : "flex-start"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Why waste time when you don’t have to?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md container alignItems="center" justify="center">
            <Lottie
              loop
              animationData={animationData3}
              play
              style={{
                width: !matches ? "80%" : "45%",
                height: !matches ? "80%" : "45%",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={!matchesSm ? "row" : "column-reverse"}
          alignItems={matches ? "center" : "flex-start"}
          md
        >
          <Grid item md container alignItems="center" justify="center">
            <Lottie
              loop
              animationData={animationData4}
              play
              style={{
                width: !matches ? "50%" : "15%",
                height: !matches ? "50%" : "15%",
              }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={!matchesSm ? "right" : "left"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={!matchesSm ? "right" : "left"}
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={!matchesSm ? "right" : "left"}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                paragraph
                align={!matchesSm ? "right" : "left"}
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <SoftwareItem />
    </Grid>
  );
}

export default CustomSoftware;

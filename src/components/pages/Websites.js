import React from "react";
import {
  Grid,
  Hidden,
  Typography,
  IconButton,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import fa from "../../assets/forwardArrow.svg";
import ba from "../../assets/backArrow.svg";
import SoftwareItem from "../SoftwareItem";

import analytics from "../../assets/analytics.svg";
import ecommerce from "../../assets/ecommerce.svg";
import speaker from "../../assets/outreach.svg";
import seo from "../../assets/seo.svg";

function WebsiteItem({ title, image, paragraph, toRight = false }) {
  const theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("md")),
    matchesSm = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      direction="column"
      alignItems={!matches ? (toRight ? "flex-end" : "flex-start") : "center"}
    >
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        direction={matchesSm ? "column" : "row"}
        alignItems="center"
        style={{ maxWidth: "55em" }}
      >
        <Grid item>
          <img src={image} alt="pic" style={{ padding: "1em" }} />
        </Grid>
        <Grid
          item
          container
          style={{ maxWidth: "30em" }}
          justify={!toRight ? "center" : "flex-start"}
          alignItems="center"
        >
          <Grid item>
            {paragraph.map((item) => (
              <Typography variant="body2" paragraph>
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
const styles = makeStyles((theme) => ({
  arrow: { marginTop: "0.1em" },
  arrowNext: { marginTop: "0.1em", marginLeft: "auto" },
  heading: {
    maxWidth: "40em",
  },
}));
function Websites() {
  const classes = styles(),
    theme = useTheme(),
    matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  // matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid item container direction="column">
      <Grid item container style={{ padding: "4em 4em" }}>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              to="/MobileApps"
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
            Website Development
          </Typography>
          <Typography variant="body2" paragraph>
            Having a website is a necessity in today’s business world. They give
            you one central, public location to let people know who you are,
            what you do, and why you’re the best at it.
          </Typography>
          <Typography variant="body2" paragraph>
            From simply having your hours posted to having a full fledged online
            store, making yourself as accessible as possible to users online
            drives growth and enables you to reach new customers.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item style={{ marginLeft: "auto" }}>
            <IconButton component={Link} to="/CustomSoftware">
              <img src={fa} alt="forwardarrow" className={classes.arrow} />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Container maxWidth="lg">
        <Grid
          item
          container
          direction="column"
          spacing="6"
          style={{ padding: "6em 0" }}
        >
          <WebsiteItem
            title="Analytics"
            image={analytics}
            paragraph={[
              "Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.",
            ]}
          />
          <WebsiteItem
            title="E-Commerce"
            image={ecommerce}
            toRight
            paragraph={[
              "It’s no secret that people like to shop online.",
              "In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.",
            ]}
          />
          <WebsiteItem
            title="Outreach"
            image={speaker}
            paragraph={[
              "Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.",
            ]}
          />
          <WebsiteItem
            title="Search Engine Optimization"
            image={seo}
            toRight
            paragraph={[
              "How often have you ever been to the second page of Google results?",
              "If you’re like us, probably never.",
              "Customers don’t go there either, so we make sure your website is designed to end up on top.",
            ]}
          />
        </Grid>
      </Container>
      <SoftwareItem />
    </Grid>
  );
}

export default Websites;

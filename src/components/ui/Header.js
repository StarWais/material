import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  Drawer,
  useScrollTrigger,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { v4 as uuidv4 } from "uuid";
import logo from "../../assets/logo.png";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const styles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.4em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemText: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelectedText: {
    ...theme.typography.tab,
    color: "white",
    opacity: 1,
  },
  drawerEstimate: {
    backgroundColor: theme.palette.common.orange,
    ...theme.typography.tab,
    color: "white",
  },
  toolbar: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      paddingRight: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-between",
      paddingRight: "0.7rem",
    },
  },
  drawerButton: {
    height: "2.5rem",
    width: "2.5rem",
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
      width: "2rem",
    },
    color: "white",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  menuContainer: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  menuItemSelected: {
    backgroundColor: "#3390ce !important",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    color: "#ffff",
    borderRadius: "50px",
    marginRight: "25px",
    marginLeft: "50px",
    height: "45px",
  },
}));
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const routes = [
  {
    path: "/",
    text: "Home",
    tabIndex: 0,
  },
  {
    path: "/Services",
    text: "Services",
    tabIndex: 1,
    ariaOwns: true,
    ariaPopUp: true,
    onMouseOver: true,
  },
  {
    path: "/Revolution",
    text: "The Revolution",
    tabIndex: 2,
  },
  {
    path: "/About",
    text: "About Us",
    tabIndex: 3,
  },
  {
    path: "/Contact",
    text: "Contact Us",
    tabIndex: 4,
  },
];
const menuItems = [
  {
    path: "/Services",
    text: "Services",
    tabIndex: 1,
    menuTabIndex: 0,
  },
  {
    path: "/CustomSoftware",
    text: "Custom Software Development",
    tabIndex: 1,
    menuTabIndex: 1,
  },
  {
    path: "/MobileApps",
    text: "Mobile App Development",
    tabIndex: 1,
    menuTabIndex: 2,
  },
  {
    path: "/Websites",
    text: "Website Development",
    tabIndex: 1,
    menuTabIndex: 3,
  },
];
function Header() {
  const history = useHistory();
  const classes = styles(),
    [activeTab, setActiveTab] = useState(0),
    [menuAnchor, setMenuAnchor] = useState(null),
    [isMenuOpen, setIsMenuOpen] = useState(false),
    [activeMenuItem, setActiveMenuItem] = useState(undefined),
    [isDrawerActive, setIsDriverActive] = useState(false),
    theme = useTheme(),
    matches = useMediaQuery(theme.breakpoints.down("md"));
  const tabHandler = (e, value) => {
    setActiveTab(value);
  };
  const openMenuHandler = (e) => {
    setMenuAnchor(e.currentTarget.firstChild);
    setIsMenuOpen(true);
  };
  const closeMenuHandler = (e) => {
    setMenuAnchor(null);
    setIsMenuOpen(false);
  };
  const closeMenuItemHandler = (e, id) => {
    closeMenuHandler(e);
    setActiveTab(1);
    setActiveMenuItem(id);
  };
  useEffect(() => {
    const locationTracking = () => {
      const path = window.location.pathname;
      [...menuItems, ...routes].forEach((item) => {
        switch (path) {
          case item.path:
            if (activeTab !== item.tabIndex) {
              setActiveTab(item.tabIndex);
              if (item.menuTabIndex && item.menuTabIndex !== activeMenuItem) {
                setActiveMenuItem(item.menuTabIndex);
              }
            }
            break;
          default:
            break;
        }
      });
      if (path === "/Estimate") {
        setActiveTab(undefined);
      }
    };
    history.listen((location) => {
      locationTracking();
    });
    locationTracking();
  }, [activeTab, activeMenuItem, history]);
  const tabs = (
    <>
      <Tabs
        value={activeTab}
        onChange={tabHandler}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            disableRipple
            component={Link}
            to={route.path}
            key={index}
            className={classes.tab}
            label={route.text}
            aria-owns={
              route.ariaOwns ? (menuAnchor ? "simple-menu" : undefined) : null
            }
            aria-haspopup={
              route.ariaPopUp ? (menuAnchor ? "true" : undefined) : null
            }
            onMouseOver={route.onMouseOver ? (e) => openMenuHandler(e) : null}
            onClick={(e) => tabHandler(e, route.tabIndex)}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        className={classes.estimateButton}
        color="secondary"
        component={Link}
        onClick={() => setActiveTab(undefined)}
        to={"/Estimate"}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={menuAnchor}
        open={isMenuOpen}
        onClose={closeMenuHandler}
        MenuListProps={{ onMouseLeave: closeMenuHandler }}
        classes={{ paper: classes.menuContainer }}
        elevation={0}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            onClick={(e) => closeMenuItemHandler(e, index)}
            component={Link}
            to={item.path}
            selected={activeMenuItem === index && activeTab === 1}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
            key={uuidv4()}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <Drawer
      anchor="right"
      open={isDrawerActive}
      onClose={() => setIsDriverActive(false)}
      classes={{ paper: classes.drawer }}
    >
      <List disablePadding>
        {routes.map((route) => (
          <ListItem
            button
            divider
            disableRipple
            component={Link}
            onClick={() => {
              setIsDriverActive(false);
              setActiveTab(route.tabIndex);
            }}
            selected={activeTab === route.tabIndex}
            to={route.path}
            key={uuidv4()}
          >
            <ListItemText
              disableTypography
              classes={{
                root:
                  activeTab === route.tabIndex
                    ? classes.drawerItemSelectedText
                    : classes.drawerItemText,
              }}
            >
              {route.text}
            </ListItemText>
          </ListItem>
        ))}
        <ListItem
          button
          divider
          disableRipple
          component={Link}
          onClick={() => {
            setIsDriverActive(false);
            setActiveTab(5);
          }}
          selected={activeTab === 5}
          classes={{
            root: classes.drawerEstimate,
          }}
          to={"/Estimate"}
        >
          <ListItemText disableTypography>Free Estimate</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to={"/"}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {!matches && tabs}
            {matches && (
              <IconButton disableRipple onClick={() => setIsDriverActive(true)}>
                <MenuRoundedIcon className={classes.drawerButton} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {drawer}
    </>
  );
}

export default Header;

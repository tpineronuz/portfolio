import NavbarContextProvider, {
  NavbarContext,
} from "../../contexts/Navbar/NavbarContextProvider";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

import { Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const drawerWidth = 240;

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 20,
    padding: 0,
    display: "none",
  },
  switchBase: {
    padding: 2,
    color: "#5d5fcb",
    "&$checked": {
      transform: "translateX(12px)",
      color: "#272727",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#5d5fcb",
        borderColor: "#5d5fcb",
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: "none",
  },
  track: {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: "#272727",
  },
  checked: {},
}))(Switch);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#171717",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    display: "flex",
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#cfd4cf",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#171717",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  handleIcon: {
    color: "#cfd4cf",
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#cfd4cf",
  },
  list: {
    width: "100%",
    height: "max-content",
    padding: "0px",
  },
  noStyleLink: {
    textDecoration: "none",
    width: "100%",
    height: "max-content",
    padding: "0px",
  },
  buttons: {
    width: "100%",
    borderRadius: "0px",
    textTransform: "capitalize",
    color: "grey",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#5d5fcb",
    },
  },
  links: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(true);
  const [state, setState] = useContext(NavbarContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeSwitch = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
    console.log(dark);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <ChevronRightIcon />
          </IconButton>
          <div className={classes.titleRow}>
            <Typography variant="h6" noWrap className={classes.title}>
              {state.navbarTitle}
            </Typography>
            <AntSwitch
              checked={dark}
              onChange={handleThemeSwitch}
              name="checkedC"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            className={classes.handleIcon}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {["Home", "About Me", "My Work", "My Skills", "Contact Me"].map(
            (text, index) => (
              <ListItem className={classes.list}>
                <Link to={"/" + text} className={classes.noStyleLink}>
                  <Button
                    color="primary"
                    className={classes.buttons}
                    onClick={function () {
                      if (text == "Home") {
                        text = "T.Piñero // Web Developer";
                      }
                      handleDrawerClose();
                      setState({ navbarTitle: text });
                    }}
                  >
                    {text}
                  </Button>
                </Link>
              </ListItem>
            )
          )}
        </List>

        <li className={classes.links}>
          <a href="https://www.linkedin.com/in/thomas-pi%C3%B1ero-nuz-391b15211/">
            <LinkedInIcon
              className="contact"
              id="instagram"
              style={{
                color: "#0072b1",
              }}
            />
          </a>
          <a href="https://www.twitter.com/tpineronuz/">
            <TwitterIcon
              className="contact"
              id="instagram"
              style={{
                color: "#00acee",
              }}
            />
          </a>
          <a href="https://github.com/tpineronuz">
            <GitHubIcon
              className="contact"
              id="instagram"
              style={{
                color: "#f7b3b0",
              }}
            />
          </a>
        </li>
      </Drawer>
    </div>
  );
}

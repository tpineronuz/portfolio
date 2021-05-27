import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";


import clsx from "clsx";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import logoHeader from "../../images/logo.png";


import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    paddingLeft:'150px',
    backgroundColor: "#171717",
    },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#171717",
  },
  logo: {
    width: "100%",
    marginBottom: "-10px",
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

export default function DesktopNavbar() {
  const classes = useStyles();

  
  const [navbarTitle, setnavbarTitle] = React.useState('T.Piñero // Web Developer');


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {navbarTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Link to="/">
          <img src={logoHeader} alt="logoHeader" className={classes.logo} onClick={function(){
                    setnavbarTitle('T.Piñero // Web Developer');
                }}/>
        </Link>
        <List>
          {["About Me", "My Work", "My Skills", "Contact Me"].map(
            (text, index) => (
              <ListItem className={classes.list}>
                <Link to={"/" + text} className={classes.noStyleLink}>
                  <Button color="primary" className={classes.buttons} onClick={function(){
                    setnavbarTitle(text);
                }}>
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
                color: "#e0e4ff",
              }}
            />
          </a>
          <a href="https://www.twitter.com/tpineronuz/">
            <TwitterIcon
              className="contact"
              id="instagram"
              style={{
                color: "#4c63fc",
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

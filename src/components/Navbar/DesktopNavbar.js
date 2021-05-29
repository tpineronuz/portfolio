import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Switch from '@material-ui/core/Switch';
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logoHeader from "../../images/logo.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";


const AntSwitch = withStyles((theme) => ({
  root: {
    width: 32,
    height: 20,
    padding: 0,
    display: 'none',
  },
  switchBase: {
    padding: 2,
    color: '#5d5fcb',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#272727',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#5d5fcb',
        borderColor: '#5d5fcb',
      },
    },
  },
  thumb: {
    width: 16,
    height: 16,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 32 / 2,
    opacity: 1,
    backgroundColor: '#272727',
  },
  checked: {},
}))(Switch);

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
  titleRow:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
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

  const [dark, setDark] = React.useState(true);
  const [navbarTitle, setnavbarTitle] = React.useState('T.Piñero // Web Developer');

  const handleThemeSwitch = () => {
    if (dark){
      setDark(false);
    }else {
      setDark(true);
    };
    console.log(dark);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
        <div className={classes.titleRow}>
          <Typography variant="h6" noWrap>
            {navbarTitle}
          </Typography>
          <AntSwitch checked={dark} onChange={handleThemeSwitch} name="checkedC" />
          </div>
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

import React from "react";


import itecPhoto from "../../images/itecphoto.png";
import AboutMePhoto from "../../images/AboutMe-photo.jpg";

import { makeStyles } from "@material-ui/core/styles";


import { Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "max-content",
    minHeight: "100vh",
    marginLeft: '150px',
    paddingTop: "20px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  column1:{
    width:'50%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: "#cfd4cf",
    fontSize: "large",
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign:'center',
    width: "100%",
  },
  paragraph: {
    color: "#cfd4cf",
    fontSize: "15px",
    fontWeight: "lighter",
    marginBottom: "10px",
    width: "100%",
    textAlign: "center",
  },
  column2:{
    display:'none',
  }

}));

export default function MySkillsDesktop() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='root'>
      <div className={classes.column1}>
      <Typography className={classes.title} variant="h1" gutterBottom>
        Introducing my abilities
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
        Well, in general my skills are based on fullstack web development, focused more than anything on frontend, however what I like the most is the backend since design is not my thing. Even so,  I use design platforms such as Figma because it is obviously necessary when planning a project. The languages ​​that I use are the following:<br></br>
                    For frontend web development I use Javascript with React and some CSS library or pure CSS  directly. I know  traditional web development (HTML, CSS and pure JS). But I prefer more the focus on some library or framework.<br></br>
                    For backend web development I use NodeJS because it seems the simplest when it comes to creating an API or managing a server, in addition to being one of the most used libraries today.<br></br>
                    On the other hand, I have a lot of knowledge of Python and object-oriented programming. I am able to carry out Desktop projects with this language as well as to use a web development framework such as Django or Flask.
        </Typography>
    </div>
      
      <div className={classes.column2}>
        {//This place is for something special
        }
        </div>
        </div>
  );
}

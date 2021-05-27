import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#171717",
    height: "max-content",
    minHeight: "100vh",
    paddingTop: "70px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  title: {
    color: "#cfd4cf",
    fontSize: "large",
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom: "10px",
    paddingLeft: "25px",
    width: "100%",
  },
  paragraph: {
    color: "#cfd4cf",
    fontSize: "large",
    fontWeight: "lighter",
    marginBottom: "20px",
    width: "100%",
    textAlign: "center",
  },
}));

export default function AboutMeMobile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h1" gutterBottom>
          Who I am
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          Hello, My name is Thomas Benjamin Piñero Nuz, I live in Argentina, in
          the town of Rio Cuarto-Cordoba. I was born on June 9, 2000 here in my
          city, I am currently 20 years old. I finished high school in 2017 and
          since then I have been looking for my vocation, I studied Mechanical
          Engineering for 2 years at the National University of Rio Cuarto
          (UNRC) and I am currently studying software development.
        </Typography>
        <Typography className={classes.title} variant="h1" gutterBottom>
          What I do
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          What I do is develop web applications with modern languages ​​and
          frameworks in today's market. I am currently looking for my first
          experiences as a developer in the work environment and my preferences
          in work areas such as backend, frontend, cyber security, API
          development, etc.
        </Typography>
        <Typography className={classes.title} variant="h1" gutterBottom>
          Where I learned
        </Typography>
        <Typography className={classes.paragraph} variant="body1" gutterBottom>
          As I said before, I am studying at the Technological Institute of Río
          Cuarto (iTec). I am in the second year of my career and there I
          learned to program. However, I am very self-taught and curious when it
          comes to learning things of my interest, that's why most of the things
          I learned was thanks to the internet and courses on platforms like
          Platzi. Also, I have had the support of many mentors who have helped
          me to form my profile and learn a little more every day.
        </Typography>
      </div>
    </div>
  );
}

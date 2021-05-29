import React, { Component } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import firstproject from "../../images/firstproject.png";
import secondproject from "../../images/secondproject.png";
import WorkCard from "./WorkCard";

const useStyles = makeStyles({
  root: {
    padding: "30px",
    height: "max-content",
    minHeight: "100vh",
    paddingLeft: "150px",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
  },
});

export default function WorkList() {
  const classes = useStyles();

  const state = {
    data: [
      {
        id: "1",
        name: "Barbershop",
        description:
          "Is a React and MaterialUI project. I made it to practice some things about React and still is on development process.",
        image: firstproject,
      },
      {
        id: "2",
        name: "T.Piñero // WebDeveloper",
        description:
          "This is te currently web page, it serves me as a portfolio and presentation of my skills as software developer.",
        image: secondproject,
      },
    ],
  };
  return (
    <div className={classes.root} id="root-work-list">
      <Container fixed>
        <Grid container className={classes.list} spacing={3}>
          {state.data.map((badge) => {
            return (
              <Grid key={badge.id} item sm={3}>
                <WorkCard
                  name={badge.name}
                  description={badge.description}
                  image={badge.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

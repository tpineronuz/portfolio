import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import firstproject from "../../images/firstproject.png";
import secondproject from "../../images/secondproject.png";

import WorkCard from "./WorkCard";
import "./styles/WorkList.css";

const useStyles = makeStyles({
  root: {
    paddingTop: "50px",
    padding: "30px 10px 0px 10px",
    height: "max-content",
    minHeight: "100vh",
  },
  list: {
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
      <Container maxWidth="xl" >
        <Grid container className={classes.list} justify='center' alingContent='center' alingItems='center' spacing={3}>
          {state.data.map((badge) => {
            return (
              <Grid key={badge.id} item sm={4} xs={12} >
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

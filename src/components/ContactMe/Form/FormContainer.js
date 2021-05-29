import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Container, Grid } from "@material-ui/core";
import ContactForm from "./ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height:'max-content',
    minHeight:'100vh',
    
    },
}));

export default function FormContainer() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" id='root'>
      <Grid
        container
        className={classes.root}
        justify="left"
        alingContent="center"
        alingItems="center"
        spacing={3}
      >
        <Grid item sm={6} xs={12}>
          <Paper elevation={3}>
            <ContactForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

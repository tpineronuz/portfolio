import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { makeStyles, Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import validationSchema from "./Schema";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: "20px",
    backgroundColor: "#171717",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  field: {
    marginTop: "10px",
    backgroundColor: "#dfe5e8",
    borderRadius: "5px",
    "& fieldset": {
      borderColor: "#5d5fcb",
    },
  },
  button: {
    margin: "10px",
    textTransform: "capitalize",
    backgroundColor: "#5d5fcb",
    color: "#171717",
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleNotificationOpen = () => {
    setOpen(true);
  };

  const handleNotificationClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          emailjs.send(
            "gmail",
            "template_1izj55n",
            values,
            "user_zIP6WvEAxnH19TbimRL51"
          );
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.paper}>
            <Field
              component={TextField}
              variant="filled"
              name="name"
              type="text"
              label="Name"
              fullWidth
              className={classes.field}
            />
            <Field
              component={TextField}
              variant="filled"
              name="subject"
              type="text"
              label="Subject"
              fullWidth
              className={classes.field}
            />
            <Field
              component={TextField}
              variant="filled"
              name="email"
              type="email"
              label="Email"
              fullWidth
              className={classes.field}
            />
            <Field
              component={TextField}
              variant="filled"
              name="message"
              type="text"
              label="Message"
              fullWidth
              className={classes.field}
            />
            <div className={classes.buttonRow}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={function () {
                  submitForm();
                  handleNotificationOpen();
                }}
              >
                Send Message
              </Button>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleNotificationClose}
                severity="success"
                message="Your message has been sent, thank you."
              ></Snackbar>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

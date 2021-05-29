import React from "react";
import FormContainer from "../components/ContactMe/Form/FormContainer";
import "./styles/ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contact-container">
      <div className="desktop">
        <FormContainer />
      </div>
      <div className="mobile">
        <FormContainer />
      </div>
    </div>
  );
}

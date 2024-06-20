import React from "react";
import Container from "../components/uiCustom/Container";
import ContactHeadAndNav from "../components/ContactComponents/ContactHeadinAndNav/ContactHeadAndNav";
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <Container px_none>
        <div className="flex ">
          <ContactHeadAndNav />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;

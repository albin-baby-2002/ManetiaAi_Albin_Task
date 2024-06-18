import React from 'react'
import Container from '../Components/UIcomponets/Container'
import ContactHeadAndNav from '../Components/ContactComponents/ContactHeadinAndNav/ContactHeadAndNav'
import ContactForm from '../Components/ContactComponents/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div >
      <Container px_none>
        <ContactHeadAndNav/>
        <ContactForm/>
      </Container>
    </div>
  )
}

export default Contact

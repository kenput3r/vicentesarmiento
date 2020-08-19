import React, { useState } from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import language from "../components/language"

const Container = styled.div`
  position: relative;
  top: 125px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 125px;
  }
  @media (max-width: 1024px) {
    top: 90px;
  }
  @media (max-width: 767px) {
    top: 75px;
    &:after {
      content: " ";
      display: table;
      margin-bottom: 75px;
    }
  }
`
const HeroContainer = styled.div`
  position: relative;
  width: 100%;

  .gatsby-image-wrapper {
    min-height: 300px;
  }
`
const HeadingContainer = styled.div`
  color: #fff;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const H1 = styled.h1`
  width: 100%;

  small {
    font-weight: normal;
    font-size: 16px;
  }
`
const Table = styled.div`
  display: table;
  margin: 0 auto 30px;
  max-width: 1040px;
`
const Row = styled.div`
  display: table-row;
`
const Cell = styled.div`
  display: table-cell;
  padding: 0 20px;
  width: 50%;

  &.valign-center {
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`
const Data = styled.div`
  border-left: 1px solid #cccccc;
  padding-left: 20px;

  @media (max-width: 767px) {
    border-left: 0;
    border-top: 1px solid #cccccc;
    padding-left: 0;
    padding-top: 20px;
  }

  a {
    color: rgb(34, 66, 137);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`
const Form = styled.form`
  max-width: 420px;
  margin: 20px auto;
`
const Input = styled.input`
  color: rgb(34, 66, 137);
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid rgb(34, 66, 137);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;

  :focus {
    border: 2px solid #f1c80f;
  }

  &[type="submit"] {
    width: 100%;
    background: rgb(34, 66, 137);
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;

    :hover {
      background: rgba(34, 66, 137, 0.8);
    }
  }
`
const CheckBoxes = styled.div``
const TextArea = styled.textarea`
  height: 150px;
  line-height: 150%;
  resize: vertical;
  color: rgb(34, 66, 137);
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid rgb(34, 66, 137);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;

  :focus {
    border: 2px solid #f1c80f;
  }
`
const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    :checked ~ span {
      background-color: rgb(34, 66, 137);

      :after {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    :after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
const Address = styled.div`
  display: ${props => (props.show ? "block" : "none")};
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "get-involved.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.heroImage.childImageSharp.fluid}
      alt="Vicente Samrmiento and team working a food bank"
    />
  )
}

const postContact = async (
  event,
  email,
  fName,
  lName,
  phone,
  sendNewsletter
) => {
  event.preventDefault()
  const contact_form = document.getElementById("ContactForm")
  let form_errors = false
  for (let i = 0; i < contact_form.elements.length; i++) {
    const element = contact_form.elements[i]
    if (element.required && !element.value) {
      form_errors = true
    }
  }
  if (!form_errors) {
    if (sendNewsletter) {
      const body = { email: email, fName: fName, lName: lName, phone: phone }
      try {
        const response = await fetch("/.netlify/functions/create-contact", {
          method: "POST",
          body: JSON.stringify(body),
        })
        if (!response.error) {
          console.log("no errors")
        } else {
          console.log(response.error)
        }
      } catch (error) {
        console.log(error)
      }
    }
    contact_form.submit()
  }
}

const text = {
  h1: {
    english: `Get Involved`,
    spanish: `Involucrate`,
  },
  h1_small: {
    english: `learn how you can make a difference`,
    spanish: `aprende cómo puedes hacer la diferencia`,
  },
  h2: {
    english: `Send a message`,
    spanish: `Enviar un mensaje`,
  },
  firstName: {
    english: `* First Name`,
    spanish: `* Primer Nombre`,
  },
  lastName: {
    english: `* Last Name`,
    spanish: `* Apellido`,
  },
  phoneNumber: {
    english: `Phone Number`,
    spanish: `Número De Teléfono`,
  },
  emailAddress: {
    english: `* Email Address`,
    spanish: `* Correo Electrónico`,
  },
  sendYardSign: {
    english: `Send me a yard sign`,
    spanish: `Envíenme una letrero de yarda`,
  },
  volunteer: {
    english: `I would like to volunteer`,
    spanish: `Me gustaría ser voluntario`,
  },
  makeDonation: {
    english: `I would like to make a donation`,
    spanish: `Me gustaría hacer una donación`,
  },
  receiveEmails: {
    english: `sign me up to receive campaign update emails`,
    spanish: `registrame para recibir correos electrónicos de actualizaciones de la campaña`,
  },
  street: {
    english: `* Street Address`,
    spanish: `* Dirección`,
  },
  zip: {
    english: `* Zip Code`,
    spanish: `* Código postal`,
  },
  message: {
    english: `Message`,
    spanish: `Mensaje`,
  },
  h3: {
    english: `Other ways to get connected`,
    spanish: `Otras formas de conectarse`,
  },
  writeUs: {
    english: `Write us at:`,
    spanish: `Escríbenos a`,
  },
  emailUs: {
    english: `Email us at:`,
    spanish: `Envíenos un email a`,
  },
  followUs: {
    english: `Follow us on:`,
    spanish: `Siguenos`,
  },
  submit: {
    english: `SUBMIT`,
    spanish: `ENVIAR`,
  },
}

const Contact = () => {
  const [email, setEmail] = useState("")
  const [fName, setFname] = useState("")
  const [lName, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [street, setStreet] = useState("")
  const [zip, setZip] = useState("")
  const [sendNewsletter, setSendNewsletter] = useState(true)
  const [getYardSign, setGetYardSign] = useState(false)
  const [volunteer, setVolunteer] = useState(false)
  const [makeDonation, setMakeDonation] = useState(false)
  return (
    <Layout location="/contact">
      <PageHeader />
      <SEO title="Contact Vicente Sarmiento" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              {text.h1[language]} <br />
              <small>{text.h1_small[language]}</small>
            </H1>
          </HeadingContainer>
          <Hero />
        </HeroContainer>
        <Table>
          <Row>
            <Cell>
              <h2 style={{ maxWidth: 420, margin: "0 auto" }}>
                {text.h2[language]}
              </h2>
              <Form
                name="contact"
                id="ContactForm"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Input
                  name="fName"
                  required
                  type="text"
                  placeholder={text.firstName[language]}
                  onChange={event => setFname(event.target.value)}
                />
                <Input
                  name="lName"
                  required
                  type="text"
                  placeholder={text.lastName[language]}
                  onChange={event => setLname(event.target.value)}
                />
                <Input
                  name="email"
                  required
                  type="email"
                  placeholder={text.emailAddress[language]}
                  onChange={event => setEmail(event.target.value)}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder={text.phoneNumber[language]}
                  onChange={event => setPhone(event.target.value)}
                />
                <CheckBoxes>
                  <Label>
                    <input
                      type="checkbox"
                      defaultChecked={getYardSign}
                      onChange={() => setGetYardSign(!getYardSign)}
                      name="send_yard_sign"
                      value="Send me a yard sign"
                    />
                    <span></span>
                    <small>{text.sendYardSign[language]}</small>
                  </Label>
                  <Label>
                    <input
                      type="checkbox"
                      defaultChecked={volunteer}
                      onChange={() => setVolunteer(!volunteer)}
                      name="volunteer"
                      value="I would like to volunteer"
                    />
                    <span></span>
                    <small>{text.volunteer[language]}</small>
                  </Label>
                  <Label>
                    <input
                      type="checkbox"
                      defaultChecked={makeDonation}
                      onChange={() => setMakeDonation(!makeDonation)}
                      name="make_donation"
                      value="I would like to make a donation"
                    />
                    <span></span>
                    <small>{text.makeDonation[language]}</small>
                  </Label>
                </CheckBoxes>
                <Address show={getYardSign}>
                  <Input
                    name="street"
                    required={getYardSign}
                    type="text"
                    placeholder={text.street[language]}
                    onChange={event => setStreet(event.target.value)}
                  />
                  <Input
                    name="zip"
                    required={getYardSign}
                    type="text"
                    placeholder={text.zip[language]}
                    onChange={event => setZip(event.target.value)}
                  />
                </Address>
                <TextArea
                  name="message"
                  placeholder={text.message[language]}
                ></TextArea>
                <Label>
                  <input
                    type="checkbox"
                    defaultChecked={sendNewsletter}
                    onChange={() => setSendNewsletter(!sendNewsletter)}
                  />
                  <span></span>
                  <small>{text.receiveEmails[language]}</small>
                </Label>
                <Input
                  type="submit"
                  value={text.submit[language]}
                  onClick={event =>
                    postContact(
                      event,
                      email,
                      fName,
                      lName,
                      phone,
                      sendNewsletter
                    )
                  }
                />
              </Form>
            </Cell>
            <Cell className="valign-center">
              <Data>
                <h3>{text.h3[language]}</h3>
                <p>
                  <strong>{text.writeUs[language]}</strong> <br />
                  Sarmiento for Mayor <br />
                  PO Box 10162 <br />
                  Santa Ana, CA 92711
                </p>
                <p>
                  <strong>{text.emailUs[language]}</strong>{" "}
                  <a href="mailto:info@sarmientoformayor.com">
                    info@sarmientoformayor.com
                  </a>
                </p>
                <p>
                  <strong>{text.followUs[language]}</strong>
                </p>
                <ul>
                  <li>
                    Facebook{" "}
                    <a href="https://facebook.com/sarmientoformayor">
                      @sarmientoformayor
                    </a>
                  </li>
                  <li>
                    Instagram{" "}
                    <a href="https://instagram.com/sarmientoformayor">
                      @sarmientoformayor
                    </a>
                  </li>
                  <li>
                    Twitter{" "}
                    <a href="https://twitter.com/sarmiento4mayor">
                      @sarmiento4mayor
                    </a>
                  </li>
                </ul>
              </Data>
            </Cell>
          </Row>
        </Table>
      </Container>
    </Layout>
  )
}

export default Contact

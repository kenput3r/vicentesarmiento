import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Facebook from "./facebook"
import Twitter from "./twitter"
import YouTube from "./youtube"
import Instagram from "./instagram"
import Email from "./email"
import language from "./language"
import navigationText from "./navigationText"
import platformText from "./platformText"

const Container = styled.footer`
  border-top: 1px solid #ccc;
  display: table;
  font-size: 14px;
  padding: 40px 70px;
  position: relative;
  width: 100%;
  @media (max-width: 767px) {
    display: block;
    padding: 20px 35px;
  }
  @media (max-width: 320px) {
    padding: 20px 20px;
  }
  a {
    color: rgb(34, 66, 137);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`
const Left = styled.div`
  display: table-cell;
  width: 50%;
  vertical-align: top;
  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`
const Right = styled.div`
  display: table-cell;
  width: 50%;
  text-align: right;
  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`
const Form = styled.form`
  width: 400px;
  max-width: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  input {
    height: 60px;
    border: 1px solid rgb(34, 66, 137);
    padding: 18px 20px;

    &[type="email"] {
      width: 100%;
    }

    &[type="tel"] {
      width: 70%;
      @media (max-width: 767px) {
        width: 65%;
      }
    }

    &[type="submit"] {
      background-color: rgb(34, 66, 137);
      color: #ffffff;
      float: right;
      :hover {
        cursor: pointer;
      }
      @media (max-width: 1024px) {
        width: 28%;
      }
      @media (max-width: 320px) {
        padding: 18px 10px;
      }
    }
  }
`
const FieldSet = styled.div`
  padding: 0 5px;
  margin: 0 0 5px;

  .label {
    font-size: 15px;
    margin: 0 0 6px;
  }
`
const List = styled.ul`
  list-style-type: none;
  margin-left: 5px;
  margin-right: 30px;
`
const Links = styled.div`
  display: table;
  margin: 0;
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
  @media (max-width: 767px) {
    margin: 0;
  }

  div {
    display: table-cell;
    @media (max-width: 1024px) {
      padding: 30px;
    }
    @media (max-width: 767px) {
      display: block;
      padding: 0;
      width: 100%;
    }
  }

  a {
    color: rgb(34, 66, 137);
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`
const Social = styled.div`
  a {
    display: inline-block;
    padding: 5px;
    margin-left: 49px;
    :nth-of-type(1) {
      margin-left: 0;
    }
    :hover {
      opacity: 0.8;
    }
    @media (max-width: 767px) {
      margin-left: 24px;
    }
    @media (max-width: 320px) {
      margin-left: 20px;
    }
  }
`
const Disclaimers = styled.div`
  padding-top: 30px;
  margin-left: auto;
  width: 435px;
  max-width: 100%;
  @media (max-width: 1024px) {
    margin-right: auto;
  }
  span {
    border: 1px solid;
    padding: 17px 24px;
    text-transfor: uppercase;
    @media (max-width: 767px) {
      display: block;
    }
  }
`

const postContact = async (event, email, phone, callBack, thanks, submit) => {
  event.preventDefault()
  const body = { email: email, phone: phone }
  if (email !== "" || phone !== "") {
    try {
      const response = await fetch("/.netlify/functions/create-contact", {
        method: "POST",
        body: JSON.stringify(body),
      })
      if (!response.error) {
        console.log("no errors")
        callBack(`${thanks}!`)
        setTimeout(() => {
          callBack(submit)
        }, 3000)
      } else {
        console.log(response.error)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

const Footer = () => {
  const text = {
    ...navigationText,
    ...platformText,
    email: {
      english: `Email Address`,
      spanish: `Correo Electrónico`,
    },
    phone: {
      english: `Phone Number`,
      spanish: `Número De Teléfono`,
    },
    submit: {
      english: `Join Us`,
      spanish: `Enviar`,
    },
    thanks: {
      english: `Thanks`,
      spanish: `Gracias`,
    },
    disclaimers: {
      paidForBy: {
        english: `Paid for by Sarmiento for Mayor 2020 #1425828`,
        spanish: `Pagado por Sarmiento para el alcalde 2020 #1425828`,
      },
      supportTheCampaign: {
        english: `Support our mayoral campaign to elect Vicente Sarmiento by signing up to`,
        spanish: `Apoye nuestra campaña para elegir a Vicente Sarmiento como alcalde registrándose como`,
      },
      volunteer: {
        english: `volunteer`,
        spanish: `voluntario`,
      },
      make: {
        english: `or by making a`,
        spanish: `o haciendo una`,
      },
      donationOnline: {
        english: `donation online`,
        spanish: `donación en línea`,
      },
      rightsReserved: {
        english: `All rights reserved.`,
        spanish: `Todos los derechos reservados.`,
      },
    },
  }
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [submitText, setSubmitText] = useState(text.submit[language])
  return (
    <Container>
      <Left>
        <Form>
          <FieldSet>
            <div className="label">
              <label>{text.email[language]}</label>
            </div>
            <div className="input">
              <input type="email" onChange={e => setEmail(e.target.value)} />
            </div>
          </FieldSet>
          <FieldSet>
            <div className="label">
              <label>{text.phone[language]}</label>
            </div>
            <div className="input">
              <input type="tel" onChange={e => setPhone(e.target.value)} />
              <input
                type="submit"
                value={submitText}
                onClick={e =>
                  postContact(
                    e,
                    email,
                    phone,
                    setSubmitText,
                    text.thanks[language],
                    text.submit[language]
                  )
                }
              />
            </div>
          </FieldSet>
        </Form>
        <Links>
          <div>
            <List>
              <li>
                <Link to="/">{text.home[language]}</Link>
              </li>
              <li>
                <Link to="/about/">{text.about[language]}</Link>
              </li>
              <li>
                <Link to="/contact/">{text.contact[language]}</Link>
              </li>
              <li>
                <Link to="/gallery/">{text.media[language]}</Link>
              </li>
              <li>
                <Link to="/how-to-vote/">How To Vote</Link>
              </li>
            </List>
          </div>
          <div>
            <List>
              <li>
                <Link to="/issues/affordable-housing-in-santa-ana/">
                  {text.affordableHousing.label[language]}
                </Link>
              </li>
              <li>
                <Link to="/issues/homelessness-in-santa-ana/">
                  {text.reducingHomelessness.label[language]}
                </Link>
              </li>
              <li>
                <Link to="/issues/investing-in-santa-ana-youth/">
                  {text.investmentInYouth.label[language]}
                </Link>
              </li>
              <li>
                <Link to="/issues/public-health/">
                  {text.publicHealth.label[language]}
                </Link>
              </li>
              <li>
                <Link to="/issues/safer-neighborhoods-in-santa-ana/">
                  {text.saferNeighborhoods.label[language]}
                </Link>
              </li>
            </List>
          </div>
        </Links>
      </Left>
      <Right>
        <Social>
          <a
            href="https://www.facebook.com/vicentefsarmiento"
            title="Vicente Sarmiento on Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/vicentefsarmiento/"
            title="Viente Sarmiento on Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/mayor_sarmiento"
            title="Vicente Sarmiento on Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.youtube.com/channel/UCzsCsW3YJZwkyVwTuqRe6ew"
            title="Vicente Sarmiento on YouTube"
            target="_blank"
            rel="noreferrer"
          >
            <YouTube />
          </a>
          <a
            href="mailto:info@sarmientoformayor.com"
            title="Email Vicente Sarmiento"
            target="_blank"
            rel="noreferrer"
          >
            <Email />
          </a>
        </Social>
        <Disclaimers>
          <p>
            <span>{text.disclaimers.paidForBy[language]}</span>
          </p>
          <p>
            {text.disclaimers.supportTheCampaign[language]}{" "}
            <Link to="/contact/">{text.disclaimers.volunteer[language]}</Link>{" "}
            {text.disclaimers.make[language]}{" "}
            <a href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">
              {text.disclaimers.donationOnline[language]}
            </a>
            .
          </p>
          <p>
            &copy; {new Date().getFullYear()}.{" "}
            {text.disclaimers.rightsReserved[language]}{" "}
          </p>
        </Disclaimers>
      </Right>
    </Container>
  )
}

export default Footer

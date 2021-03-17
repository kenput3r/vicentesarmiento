import React, { useState, useEffect, useRef } from "react"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import styled from "styled-components"
import language from "./language"

const BoxedText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 8px 0;
`
const Form = styled.form`
  max-width: 100%;
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
const Underlined = styled.span`
  border-bottom: 3px solid;
  padding-bottom: 5px;
`
const text = {
  h1: {
    english: `JOIN`,
    spanish: `ÚNETE`,
  },
  h2: {
    english: `THE TEAM`,
    spanish: `AL EQUIPO`,
  },
  h5: {
    english: `Subscribe`,
    spanish: ``,
  },
  h5_small: {
    english: `subscribe to our newsletter to stay in the loop`,
    spanish: `suscríbete a nuestro boletín para mantenerte informado`,
  },
  firstName: {
    english: `* First Name`,
    spanish: ``,
  },
  lastName: {
    english: `* Last Name`,
    spanish: ``,
  },
  phone: {
    english: `Phone Number`,
    spanish: `Número De Teléfono`,
  },
  email: {
    english: `Email Address`,
    spanish: `Correo Electrónico`,
  },
  submit: {
    english: `JOIN`,
    spanish: `ENVIAR`,
  },
}

const postContact = async (event, email, phone, setIsOpen) => {
  event.preventDefault()
  const contact_form = document.getElementById("SubscribeForm")
  let form_errors = false
  for (let i = 0; i < contact_form.elements.length; i++) {
    const element = contact_form.elements[i]
    if (element.required && !element.value) {
      form_errors = true
    }
  }
  if (!form_errors) {
    const body = { email: email, phone: phone }
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
  setIsOpen(false)
}

const handleKeyDown = (event, callback) => {
  if (event.keyCode === 13) {
    callback()
  }
}

const handleOpen = setIsOpen => {
  document.cookie = "disable_popup=true;max-age=2592000"
  setIsOpen(true)
}

const PopUpForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const initialRef = useRef(null)

  const handleClose = e => {
    e.preventDefault()
    setIsOpen(false)
  }

  useEffect(() => {
    if (
      !document.cookie.split("; ").find(row => row.startsWith("disable_popup"))
    ) {
      setTimeout(() => {
        handleOpen(setIsOpen)
        console.log(document.cookie)
      }, 3000)
    }
  })
  return (
    <Dialog
      isOpen={isOpen}
      initialFocusRef={initialRef}
      onDismiss={e => handleClose(e)}
      aria-label="Email Sign Up Form"
    >
      <p style={{ textAlign: "right", marginBottom: 0 }}>
        <a
          href="/"
          role="button"
          onClick={() => setIsOpen(false)}
          onKeyDown={event => handleKeyDown(event, e => handleClose(e))}
        >
          &times;
        </a>
      </p>
      <BoxedText>{text.h1[language]}</BoxedText>
      <BoxedText>{text.h2[language]}</BoxedText>
      <p>
        <Underlined>{text.h5_small[language]}</Underlined>
      </p>
      <Form id="SubscribeForm">
        <FieldSet>
          <div className="label">
            <label>{text.email[language]}</label>
          </div>
          <div className="input">
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              ref={initialRef}
            />
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
              value={text.submit[language]}
              onClick={event => postContact(event, email, phone, setIsOpen)}
            />
          </div>
        </FieldSet>
      </Form>
    </Dialog>
  )
}

export default PopUpForm

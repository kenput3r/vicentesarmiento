import React from "react"
import styled from "styled-components"
import language from "./language"
import backgroundImage from "../images/vicente-sarmiento-for-mayor-background.jpg"

const Parallax = () => {
  const text = {
    h1: {
      english: `Leadership`,
      spanish: `Nuevo`,
    },
    h2: {
      english: `Santa Ana`,
      spanish: `Liderazgo`,
    },
    h3: {
      english: `Can Trust`,
      spanish: `Para Un Brillante`,
    },
    h4: {
      english: `For A Bright Future`,
      spanish: `Santa Ana`,
    },
  }
  return (
    <Component role="img" aria-label="Vicente Sarmiento">
      <div className="title">
        <div className="heading-1">{text.h1[language]}</div>
        <div className="heading-2">{text.h2[language]}</div>
        <div className="heading-1">{text.h3[language]}</div>
        <div className="heading-2">{text.h4[language]}</div>
      </div>
    </Component>
  )
}

export default Parallax

const Component = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  height: 100vh;

  @media (max-width: 1024px) {
    background-attachment: scroll;
  }

  @media (max-width: 767px) {
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: auto 70%;
    background-position: top right;
    display: table-cell;
    vertical-align: bottom;
  }

  @media (max-width: 375px) and (min-height: 812px) {
    background-color: #272d86;
    background-position-x: 90%;
  }

  .title {
    color: #273884;
    font-weight: bold;
    margin-left: 100px;
    max-width: 60vw;
    padding-top: 10vh;
    padding-bottom: 10vh;
    position: sticky;
    position: -webkit-sticky;
    top: 30vh;

    @media (max-width: 767px) {
      background-color: #f1c80f;
      display: table-cell;
      margin-left: 0;
      max-width: 100vw;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 10px;
      position: relative;
      top: 0;
      width: 100vw;
    }
  }

  .heading-1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
    text-transform: uppercase;
    @media (min-width: 768px) and (max-width: 1024px) {
      color: #000;
      -webkit-text-fill-color: #273884;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #ffffff;
    }
  }

  .heading-2 {
    color: #ffffff;
    line-height: 2.5rem;
    margin-bottom: 5px;
    font-size: 2.5rem;
    text-transform: uppercase;
    @media (min-width: 768px) and (max-width: 1024px) {
      color: #000;
      -webkit-text-fill-color: #ffffff;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #273884;
    }
  }
`

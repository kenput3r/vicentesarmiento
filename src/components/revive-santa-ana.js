import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ReviveSantaAna = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "revive-santa-ana-5x4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Component>
      <div className="row">
        <div className="col">
          <Img fluid={data.image.childImageSharp.fluid} alt="Revive Santa Ana" />
        </div>
        <div className="col">
          <h2>How should the City of Santa Ana spend $143 million in federal stimulus funds to recover from the COVID-19 pandemic? Take the Revive Santa Ana survey and share your ideas!</h2>
          <p style={{textAlign: "center"}}><a href="https://survey123.arcgis.com/share/3bbc2a242f314eb68f1d93a23ad0c3a7" target="_blank" rel="noreferrer" className="button">TAKE THE SURVEY</a></p>
          <p>The City of Santa Ana is planning to use $142.9 million from the American Rescue Plan Act of 2021 to launch Revive Santa Ana, a comprehensive pandemic recovery program that also will allow the City to reimagine the services it provides.</p>
          <p>More information is available on the City's official website at <a href="https://www.santa-ana.org/revive-santa-ana" target="_blank" rel="noreferrer">santa-ana.org/revive-santa-ana</a></p>
        </div>
      </div>
    </Component>
  )
}

export default ReviveSantaAna

const Component = styled.div`
  background-color: #fff;
  padding: 1.45rem;
  width: 100%;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1433px;
    max-width: 100%;
    margin: 0 auto;
  }
  .col {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 1.45rem;
  }
  .button {
    background-color: #f1c80f;
    border: 2px solid #f1c80f;
    border-radius: 3px;
    color: #224289;
    display: inline-block;
    padding: 13px;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
  @media (max-width: 1280px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1023px) {
    .col {
      flex: none;
      width: 100%;
      padding: 1rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    .col {
      padding: 10px;
    }
  }
`
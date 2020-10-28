import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import language from "./language"
import map_pdf from "../images/voting-map.pdf"

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 30px auto;
  div {
    text-align: center;
    @media (min-width: 420px) {
      width: 40%;
    }
    a {
      background-color: rgb(34, 66, 137);
      border: 2px solid rgb(34, 66, 137);
      border-radius: 3px;
      color: #f1c80f;
      display: inline-block;
      font-weight: bold;
      padding: 20px;
      text-decoration: none;
      :hover {
        background-color: transparent;
        color: rgb(34, 66, 137);
      }
    }
  }
  .map-wrapper {
    @media (min-width: 420px) {
      width: 60%;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
`

const HowToVoteVideoSection = props => {
  const text = {
    h2: {
      english: `How To Vote`,
      spanish: ``,
    },
  }
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "voting-map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px 0",
        marginBottom: 30,
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {props.isPage ? (
          <h1 style={{ marginTop: 30 }}>{text.h2[language]}</h1>
        ) : (
          <h2>{text.h2[language]}</h2>
        )}
        <div className="videoWrapper">
          <iframe
            title="How To Vote In Santa Ana"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rDkqPATaTIM?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <FlexBox>
        <div className="map-wrapper">
          <Img
            width="100%"
            fluid={data.map.childImageSharp.fluid}
            alt="Map Of Voting Centers And Drop Boxes"
          />
        </div>
        <div>
          <a href={map_pdf} download>
            DOWNLOAD THE MAP
          </a>
        </div>
      </FlexBox>
    </div>
  )
}

export default HowToVoteVideoSection

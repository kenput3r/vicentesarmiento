import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import language from "./language"
import platformText from "./platformText"

const Platform = () => {
  const data = useStaticQuery(query)
  const text = {
    ...platformText,
    vicentePriorities: {
      english: `Vicente's Priorities`,
      spanish: `Prioridades De Vicente`,
    },
    readMore: {
      english: `Learn More`,
      spanish: `Aprende Más`,
    },
  }
  return (
    <Component>
      <div className="wrapper">
        <h2>{text.vicentePriorities[language]}</h2>
        <article>
          <div className="icon">
            <Img
              fluid={
                data[`${language}_affordableHousing_op0d`].childImageSharp.fluid
              }
              alt={text.affordableHousing.label[language]}
            />
          </div>
          <div className="excerpt">
            {text.affordableHousing.excerpt[language]} <br />{" "}
            <Link
              to="/issues/affordable-housing-in-santa-ana"
              title="Read more about Vicente's plans for affordable housing in Santa Ana"
            >
              {text.readMore[language]}
            </Link>
          </div>
        </article>
        <article>
          <div className="icon">
            <Img
              fluid={
                data[`${language}_investmentInYouth_op0c`].childImageSharp.fluid
              }
              alt={text.investmentInYouth.label[language]}
            />
          </div>
          <div className="excerpt">
            {text.investmentInYouth.excerpt[language]} <br />{" "}
            <Link
              to="/issues/investing-in-santa-ana-youth"
              title="Read more about Vicente's plans for education in Santa Ana"
            >
              {text.readMore[language]}
            </Link>
          </div>
        </article>
        <article>
          <div className="icon">
            <Img
              fluid={
                data[`${language}_reducingHomelessness_op0c`].childImageSharp
                  .fluid
              }
              alt={text.reducingHomelessness.label[language]}
            />
          </div>
          <div className="excerpt">
            {text.reducingHomelessness.excerpt[language]} <br />{" "}
            <Link
              to="/issues/homelessness-in-santa-ana"
              title="Read more about Vicente's plans for reducing homelessness in Santa Ana"
            >
              {text.readMore[language]}
            </Link>
          </div>
        </article>
        <article>
          <div className="icon">
            <Img
              fluid={
                data[`${language}_saferNeighborhoods_op0c`].childImageSharp
                  .fluid
              }
              alt={text.saferNeighborhoods.label[language]}
            />
          </div>
          <div className="excerpt">
            {text.saferNeighborhoods.excerpt[language]} <br />{" "}
            <Link
              to="/issues/safer-neighborhoods-in-santa-ana"
              title="Read more about Vicente's plans for promoting safer neighborhoods in Santa Ana"
            >
              {text.readMore[language]}
            </Link>
          </div>
        </article>
        <article>
          <div className="icon">
            <Img
              fluid={
                data[`${language}_publicHealth_op0c`].childImageSharp.fluid
              }
              alt={text.publicHealth.label[language]}
            />
          </div>
          <div className="excerpt">
            {text.publicHealth.excerpt[language]} <br />{" "}
            <Link
              to="/issues/public-health/"
              title="Read more about Vicente's plans for promoting safer neighborhoods in Santa Ana"
            >
              {text.readMore[language]}
            </Link>
          </div>
        </article>
      </div>
    </Component>
  )
}

export default Platform

const query = graphql`
  query PlatformQuery {
    english_educationFirst_op0c: file(
      relativePath: { eq: "education-first_op0c.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_educationFirst_op0c: file(
      relativePath: { eq: "education-first_op0c-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    english_reducingHomelessness_op0c: file(
      relativePath: { eq: "reducing-homelessness_op0c.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_reducingHomelessness_op0c: file(
      relativePath: { eq: "reducing-homelessness_op0c-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    english_saferNeighborhoods_op0c: file(
      relativePath: { eq: "safer-neighborhoods_op0c.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_saferNeighborhoods_op0c: file(
      relativePath: { eq: "safer-neighborhoods_op0c-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    english_investmentInYouth_op0c: file(
      relativePath: { eq: "investment-in-youth_op0c.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_investmentInYouth_op0c: file(
      relativePath: { eq: "investment-in-youth_op0c-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    english_publicHealth_op0c: file(
      relativePath: { eq: "public-health_op0c.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_publicHealth_op0c: file(
      relativePath: { eq: "public-health_op0c-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    english_affordableHousing_op0d: file(
      relativePath: { eq: "affordable-housing_op0d.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spanish_affordableHousing_op0d: file(
      relativePath: { eq: "affordable-housing_op0d-spanish.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Component = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding-top: 30px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
    text-align: center;
  }

  article {
    box-sizing: border-box;
    display: inline-block;
    width: 33%;
    padding: 10px;
    vertical-align: text-top;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .icon {
    margin: 0 auto 5px;
    width: 80%;
  }

  .excerpt {
    text-align: left;
    padding: 0 20px;

    a {
      color: rgb(34, 66, 137);
      font-weight: bold;
      text-decoration: none;
    }
  }
`

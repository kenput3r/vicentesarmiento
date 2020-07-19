import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "vicente-sarmiento-16x9-saf.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <BackgroundImage className="HeroBackground" fluid={data.heroImage.childImageSharp.fluid} role="img" aria-label="Vicente Samrmiento" />
}

export default Hero

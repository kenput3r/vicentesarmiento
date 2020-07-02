import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import PageHeader from "../../components/PageHeader"
import SEO from "../../components/seo"
import language from "../../components/language"
import platformText from "../../components/platformText"

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
const H3 = styled.h3`
  color: rgb(34, 66, 137);
  font-size: 2rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  max-width: 100%;
`
const Content = styled.div`
  margin-bottom: 30px;
`
const Wrapper = styled.div`
  max-width: 1140px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`
const Table = styled.div`
  display: table;
  margin: 50px 0;
  padding: 50px 0;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    &.yellow {
      flex-direction: column;
    }
  }

  &.yellow {
    background-color: #f2c811;
  }

  &.slanted {
    &:before,
    &:after {
      background: inherit;
      content: '';
      display: block;
      height: 50%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
      -webkit-backface-visibility: hidden;
    }
  }

  &.sltr {
    &:before {
      top: 0;
      transform: skewY(1.5deg);
      transform-origin: 100% 0;
    }
    
    &:after {
      bottom: 0;
      transform: skewY(-1.5deg);
      transform-origin: 100%;
    }
  }
`
const TableCell = styled.div`
  display: table-cell;
  padding: 50px;
  width: 50%;
  vertical-align: middle;

  @media (max-width: 767px) {
    display: block;
    padding: 10px;
    width: 100%;
  }
`
const Page = () => {
  const Images = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "public-health.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      english_publicHealth_op0c: file(relativePath: { eq: "public-health_op0c.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spanish_publicHealth_op0c: file(relativePath: { eq: "public-health_op0c-spanish.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnership: file(relativePath: { eq: "public-health-partnership.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      parks: file(relativePath: { eq: "public-health-neighborhoods-parks.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stress: file(relativePath: { eq: "public-health-stress-reduction.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      covid: file(relativePath: { eq: "public-health-covid-testing.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const text = {
    ...platformText.publicHealth
  }
  return(
    <Layout location="/issues/public-health/">
      <PageHeader />
      <SEO title={text.label[language]} />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              {text.label[language]}
            </H1>
          </HeadingContainer>
          <Img fluid={Images.heroImage.childImageSharp.fluid} alt="People congregating in Downtown Santa Ana" />
        </HeroContainer>
        <Content>
          <Wrapper>
            <div style={{textAlign: "center", maxWidth: 300, margin:"30px auto"}}>
              <Img fluid={Images[`${language}_publicHealth_op0c`].childImageSharp.fluid} alt="Vicente Samrmiento and team working a food bank" />
            </div>
            <h2 style={{textAlign: "center"}}>{text.excerpt[language]}</h2>
          </Wrapper>
          <Table className="yellow slanted sltr">
            <TableCell>
            <Img fluid={Images.partnership.childImageSharp.fluid} alt="People partnering together to accomplish a goal" />
            </TableCell>
            <TableCell>
              <H3>
                {text.bullets[0][language]}
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                {text.bullets[1][language]}
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.parks.childImageSharp.fluid} alt="People enjoying a park" />
            </TableCell>
          </Table>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img fluid={Images.stress.childImageSharp.fluid} alt="People exercising and being active" />
            </TableCell>
            <TableCell>
              <H3>
                {text.bullets[2][language]}
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                {text.bullets[3][language]}
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.covid.childImageSharp.fluid} alt="Person getting tested for covid-19" />
            </TableCell>
          </Table>
        </Content>
      </Container>
    </Layout>
  )
}

export default Page
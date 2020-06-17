import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import PageHeader from "../../components/PageHeader"
import SEO from "../../components/seo"

const Container = styled.div`
  position: relative;
  top: 125px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 125px;
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
      heroImage: file(relativePath: { eq: "safer-neighborhoods-in-santa-ana.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saferNeighborhoods_op0: file(relativePath: { eq: "safer-neighborhoods_op0c.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      response: file(relativePath: { eq: "safer-neighborhoods-response.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oversight: file(relativePath: { eq: "safer-neighborhoods-oversight.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      treatment: file(relativePath: { eq: "safer-neighborhoods-treatment.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prevention: file(relativePath: { eq: "safer-neighborhoods-prevention.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <PageHeader />
      <SEO title="Safer Neighborhoods In Santa Ana" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              Safer Neighborhoods In Santa Ana
            </H1>
          </HeadingContainer>
          <Img fluid={Images.heroImage.childImageSharp.fluid} alt="Downtown Santa Ana, 4th Street" />
        </HeroContainer>
        <Content>
          <Wrapper>
            <div style={{textAlign: "center", maxWidth: 300, margin:"30px auto"}}>
              <Img fluid={Images.saferNeighborhoods_op0.childImageSharp.fluid} alt="Vicente Samrmiento and team working a food bank" />
            </div>
            <h2 style={{textAlign: "center"}}>Our City should be smart on crime by efficiently using tax dollars to reach crime reduction goals. </h2>
          </Wrapper>
          <Table className="yellow slanted sltr">
            <TableCell>
            <Img fluid={Images.response.childImageSharp.fluid} alt="People writing reports and responding" />
            </TableCell>
            <TableCell>
              <H3>
                Develop response procedures that deploy specialized civilian responders for routine field reports, situations involving mental illness, and homelessness.
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Create a public safety oversight board for community input and review of public safety operations.
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.oversight.childImageSharp.fluid} alt="People voting in a committee" />
            </TableCell>
          </Table>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img fluid={Images.treatment.childImageSharp.fluid} alt="Health care works at a treatment center" />
            </TableCell>
            <TableCell>
              <H3>
                Work with outside agencies to guide people with substance disorders into treatment and rehabilitation programs. 
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Focus on cost-saving preventative services in high risk neighborhoods and populations. 
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.prevention.childImageSharp.fluid} alt="People performing cost saving maintenance" />
            </TableCell>
          </Table>
        </Content>
      </Container>
    </Layout>
  )
}

export default Page
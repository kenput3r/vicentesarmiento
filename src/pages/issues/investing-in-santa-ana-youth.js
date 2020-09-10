import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import PageHeader from "../../components/PageHeader"
import SEO from "../../components/seo"
import language from "../../components/language"
import platformText from "../../components/platformText"
import Video from "../../components/video"

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
      content: "";
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
      heroImage: file(relativePath: { eq: "education-in-santa-ana.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      english_educationFirst_op0: file(
        relativePath: { eq: "investment-in-youth_op0c.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spanish_educationFirst_op0: file(
        relativePath: { eq: "investment-in-youth_op0c-spanish.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      one: file(relativePath: { eq: "invest-in-youth-afterschool.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "invest-in-youth-alternatives.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "invest-in-youth-scholarship.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "invest-in-youth-literacy.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const text = {
    ...platformText.investmentInYouth,
  }
  return (
    <Layout location="/issues/investing-in-santa-ana-youth/">
      <PageHeader />
      <SEO title={text.label[language]} />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">{text.label[language]}</H1>
          </HeadingContainer>
          <Img
            fluid={Images.heroImage.childImageSharp.fluid}
            alt="School campus in Santa Ana"
          />
        </HeroContainer>
        <Content>
          <Wrapper>
            <div
              style={{
                textAlign: "center",
                maxWidth: 300,
                margin: "30px auto",
              }}
            >
              <Img
                fluid={
                  Images[`${language}_educationFirst_op0`].childImageSharp.fluid
                }
                alt="Investment In Youth"
              />
            </div>
            <h2 style={{ textAlign: "center" }}>{text.excerpt[language]}</h2>
          </Wrapper>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img
                fluid={Images.one.childImageSharp.fluid}
                alt="Kids working on a project"
              />
            </TableCell>
            <TableCell>
              <H3>{text.bullets[0][language]}</H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>{text.bullets[1][language]}</H3>
            </TableCell>
            <TableCell>
              <Img
                fluid={Images.two.childImageSharp.fluid}
                alt="Youths learning new skills"
              />
            </TableCell>
          </Table>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img
                fluid={Images.three.childImageSharp.fluid}
                alt="Money going towards scholarships"
              />
            </TableCell>
            <TableCell>
              <H3>{text.bullets[2][language]}</H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>{text.bullets[3][language]}</H3>
            </TableCell>
            <TableCell>
              <Img
                fluid={Images.four.childImageSharp.fluid}
                alt="Child sitting on books, reading a book"
              />
            </TableCell>
          </Table>
        </Content>
        <Content style={{ maxWidth: 1040, margin: "30px auto" }}>
          <Video
            src={`https://www.youtube.com/embed/gy5e6uUDi5o`}
            title={`Investing In Santa Ana's Youth`}
          />
        </Content>
      </Container>
    </Layout>
  )
}

export default Page

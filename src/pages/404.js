import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  top: ${props => props.headerHeight}px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: ${props => props.headerHeight}px;
  }
`
const Table = styled.div`
  background-color: #f1c80f;
  display: table;
  width: 100%;
`
const TableCell = styled.div`
  display: table-cell;
  width: 50%;
  text-align: center;
  vertical-align: middle;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }

  .image-wrapper {
    height: calc(100vh - ${props => props.headerHeight}px);
    max-height: calc(100vh - ${props => props.headerHeight}px);
  }
`
const NotFoundPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  useEffect(() => {
    const Header = document.querySelector("header")
    setHeaderHeight(Header.offsetHeight)
  }, [])
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "sarmiento-poster.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout location="/">
      <SEO title="404: Not found" />
      <PageHeader />
      <Container headerHeight={headerHeight}>
        <Table>
          <TableCell>
            <h1>
              404
              <br />
              NOT FOUND
            </h1>
            <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
          </TableCell>
          <TableCell className="image-wrapper" headerHeight={headerHeight}>
            <div className="image-wrapper">
              <Img
                fluid={data.backgroundImage.childImageSharp.fluid}
                alt="Hand drawing of Vicente Sarmiento with text reading Vicente Sarmiento for Santa Ana Mayor"
                style={{ maxHeight: "100%" }}
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
          </TableCell>
        </Table>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

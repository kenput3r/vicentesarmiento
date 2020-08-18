import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  top: 191px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 191px;
  }
  @media (max-width: 1024px) {
    top: 90px;
  }
  @media (max-width: 767px) {
    top: 95px;
    &:after {
      content: " ";
      display: table;
      margin-bottom: 95px;
    }
  }
`
const Content = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 10px;
`
const H1 = styled.h1`
  margin-bottom: 0.75rem;
`
const H2 = styled.h2`
  font-weight: normal;
  padding-top: 0;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout location={frontmatter.slug}>
      <SEO title={frontmatter.title + " - " + frontmatter.date} />
      <PageHeader />
      <Container>
        <Content>
          <H1>{frontmatter.title}</H1>
          <H2>{frontmatter.date}</H2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Content>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
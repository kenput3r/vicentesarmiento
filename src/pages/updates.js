import React from "react"
import styled from "styled-components"

import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import language from "../components/language"

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
    top: 75px;
    &:after {
      content: " ";
      display: table;
      margin-bottom: 75px;
    }
  }
`

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`
const Block = styled.div`
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 20px;
  padding: 10px;
  vertical-align: text-top;
  :last-child {
    border-bottom: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 20px 0;
  }

  .read-more {
    text-align: left;
    a {
      color: rgb(34, 66, 137);
      font-weight: bold;
      text-decoration: none;
    }
  }
`
const Title = styled.h3`
  text-align: left;
`
const Excerpt = styled.p`
  text-align: left;
`

const POSTS_QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 25
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
          excerpt
        }
      }
    }
  }
`

const text = {
  updates: {
    english: `Updates`,
    spanish: `Actualizaciones`,
  },
  read_more: {
    english: `Read More`,
    spanish: `Lee Mas`,
  },
}

const Updates = () => {
  const data = useStaticQuery(POSTS_QUERY)
  return (
    <Layout location="/updates">
      <PageHeader />
      <SEO title={text.updates[language]} />
      <Container>
        <Wrapper>
          <h1 className="page-title">{text.updates[language]}</h1>
          {data.allMarkdownRemark.edges.map(edge => (
            <Block>
              <Title>
                {edge.node.frontmatter.title} &nbsp;
                <br />
                <small>{edge.node.frontmatter.date}</small>
              </Title>
              <Excerpt>{edge.node.excerpt}</Excerpt>
              <p className="read-more">
                <Link to={edge.node.frontmatter.slug}>
                  {text.read_more[language]}
                </Link>
              </p>
            </Block>
          ))}
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Updates

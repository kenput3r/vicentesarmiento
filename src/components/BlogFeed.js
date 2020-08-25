import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import language from "./language"

const Container = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding-top: 30px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`
const H2 = styled.h2``
const InlineBlock = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: calc(33% - 40px);
  max-width: 100%;
  margin: 20px;
  padding: 10px;
  vertical-align: text-top;

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
      limit: 3
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

const BlogFeed = () => {
  const data = useStaticQuery(POSTS_QUERY)
  console.log(data)
  return (
    <Container>
      <Wrapper>
        <H2>{text.updates[language]}</H2>
        {data.allMarkdownRemark.edges.map(edge => (
          <InlineBlock>
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
          </InlineBlock>
        ))}
      </Wrapper>
    </Container>
  )
}

export default BlogFeed

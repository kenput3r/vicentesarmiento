import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

export default function Template({ data: { previous, next, post } }) {
  return (
    <Layout location={post.slug}>
      <SEO title={post.title + " - " + post.date} />
      <PageHeader />
      <Component>
        <article>
          <header>
            <h1>{post.title}</h1>
            <small>{post.date}</small>
          </header>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Component>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      slug
    }

    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

const Component = styled.div`
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

  article {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding: 10px;
  }

  header {
    margin-bottom: 1.45rem;
    small {
      font-size: 1.2rem;
    }
  }

  h1 {
    margin-bottom: 0.75rem;
  }

  nav {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`

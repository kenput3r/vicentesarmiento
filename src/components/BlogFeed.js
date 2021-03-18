import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import language from "./language"

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
  return (
    <Component>
      <div className="wrapper">
        <h2>{text.updates[language]}</h2>
        {data.allWpPost.edges.map(edge => (
          <article key={edge.node.uri}>
            <h3>
              {edge.node.title} &nbsp;
              <br />
              <small>{edge.node.date}</small>
            </h3>
            <div className="excerpt">{parse(edge.node.excerpt)}</div>
            <p className="read-more">
              <Link to={edge.node.uri}>{text.read_more[language]}</Link>
            </p>
          </article>
        ))}
      </div>
    </Component>
  )
}

export default BlogFeed

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

  .h3 {
    text-align: left;
  }

  article {
    box-sizing: border-box;
    display: inline-block;
    width: calc(33% - 40px);
    max-width: 100%;
    margin: 20px;
    padding: 10px;
    text-align: left;
    vertical-align: text-top;
    @media (max-width: 767px) {
      width: 100%;
      margin: 20px 0;
    }

    .excerpt {
      p::after {
        content: "...";
      }
    }

    p {
      text-align: left;
    }

    .read-more {
      text-align: left;
      a {
        color: rgb(34, 66, 137);
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`

const POSTS_QUERY = graphql`
  query PostsQuery {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Updates" } } } }
      }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          excerpt
          date(formatString: "MMMM DD, YYYY")
          title
          uri
        }
      }
    }
  }
`

import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import language from "../components/language"

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

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>
      <SEO title="All posts" />
      <PageHeader />
      <Component>
        <div className="wrapper">
          <h1 className="page-title">{text.updates[language]}</h1>
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title
              return (
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      </h2>
                      <small>{post.date}</small>
                    </header>
                    <section className="excerpt" itemProp="description">
                      {parse(post.excerpt)}
                    </section>
                    <footer>
                      <p className="read-more">
                        <Link to={post.uri} itemProp="url">
                          {text.read_more[language]}
                        </Link>
                      </p>
                    </footer>
                  </article>
                </li>
              )
            })}
          </ol>

          {previousPagePath && (
            <>
              <Link to={previousPagePath}>Previous page</Link>
              <br />
            </>
          )}
          {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
        </div>
      </Component>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Updates"}}}}}
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        id
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
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
    top: 75px;
    &:after {
      content: " ";
      display: table;
      margin-bottom: 75px;
    }
  }

  .wrapper {
    text-align: center;
    padding-bottom: 20px;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }

  ol li {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    margin: 20px;
    padding: 10px;
    text-align: left;
    :last-child {
      border-bottom: 0;
    }

    @media (max-width: 767px) {
      width: 100%;
      margin: 20px 0;
    }

    .excerpt {
      p::after {
        content: "...";
      }
    }

    .read-more {
      margin-bottom: 1.45rem;
      margin-top: 1.45rem;
      a {
        color: rgb(34, 66, 137);
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  header {
    margin-bottom: 1.45rem;
    small {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  h2 {
    a {
      color: rgb(34, 66, 137);
      text-decoration: none;
    }
  }
`

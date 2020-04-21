/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Facebook from "./facebook"
import Instagram from "./instagram"
import Twitter from "./twitter"
import Email from "./email"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          backgroundColor:"#f2f2f2",
          margin: `0 auto`
        }}
      >
        <main>{children}</main>
        <footer style={{backgroundColor:"#ffffff", padding:20}}>
          <div style={{width:"50%", display:"inline-block"}}>
            Paid for by Sarmiento for Mayor 2020 #1425828
          </div>
          <div style={{width:"50%", display:"inline-block", textAlign:"right"}}>
            <a href="https://www.facebook.com/SarmientoForMayor/">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/sarmientoformayor/">
              <Instagram />
            </a>
            <a>
             <Twitter />
            </a>
            <a href="mailto:info@sarmientoformayor.com">
              <Email />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

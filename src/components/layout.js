import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Footer from "./footer"

const Main = styled.main`
  :after {
    display: table;
    content: " ";
  }
`
const Layout = ({ children, location }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          margin: `0 auto`,
        }}
      >
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

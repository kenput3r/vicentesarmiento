import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"
import MobileHeader from "./MobileHeader"
import MobileDrawer from "./MobileDrawer"
import language from "./language"
import navigationText from "./navigationText"

const PageHeader = () => {
  const [logoWidth, setLogoWidth] = useState(400)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleScroll = e => {
    if (window.scrollY > lastScrollY) {
      setLastScrollY(window.scrollY)
      if (window.scrollY <= 250) {
        setLogoWidth(400 - window.scrollY)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const text = {
    ...navigationText,
    logoTitle: {
      english: `Vicente Sarmiento for Mayor`,
      spanish: `Vicente Sarmiento para Alcalde`,
    },
  }

  return (
    <header
      className="page-header"
      style={{
        backgroundColor: `#224289`,
        position: `fixed`,
        top: 0,
        width: `100%`,
        zIndex: 100,
      }}
    >
      <DesktopHeader role="navigation">
        <div style={{ display: "table-cell", width: "30%" }}>
          <div style={{ margin: 0, maxWidth: logoWidth }}>
            <a href="/" title={text.logoTitle[language]}>
              <Logo />
            </a>
          </div>
        </div>
        <div
          style={{
            display: "table-cell",
            width: "70%",
            textAlign: "right",
            verticalAlign: "middle",
          }}
        >
          <div className="desktop-link">
            <Link to="/">{text.home[language]}</Link>
          </div>
          <div className="desktop-link">
            <Link to="/about/">{text.about[language]}</Link>
          </div>
          <div className="desktop-link">
            <Link to="/contact/">{text.contact[language]}</Link>
          </div>
          <div className="desktop-link">
            <Link to="/gallery/">{text.media[language]}</Link>
          </div>
          <div className="desktop-link">
            <Link to="/blog/1/">UPDATES</Link>
          </div>
          <div className="desktop-link">
            <Link to="/endorsements/">ENDORSEMENTS</Link>
          </div>
          <a
            className="button donate"
            href="https://www.efundraisingconnections.com/c/VicenteSarmiento/"
          >
            {text.donate[language]}
          </a>
        </div>
      </DesktopHeader>
      <MobileHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  )
}

export default PageHeader

const DesktopHeader = styled.nav`
  display: table;
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (max-width: 1024px) {
    display: none;
  }

  .donate {
    background-color: #f1c80f;
    border: 2px solid #f1c80f;
    border-radius: 3px;
    color: #224289;
    display: inline-block;
    padding: 13px;
    text-decoration: none;
    vertical-align: top;
  }
`

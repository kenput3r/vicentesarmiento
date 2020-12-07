import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Videos from "../components/videos"
import Hero from "../components/hero"
import Platform from "../components/platform"
import Parallax from "../components/parallax"
import PopUpForm from "../components/PopUpForm"
import BlogFeed from "../components/BlogFeed"
import HowToVoteVideoSection from "../components/HowToVoteVideoSection"
import WinAnnouncement from "../components/winAnnouncement"

const HeroContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 91px;
  }

  .HeroBackground {
    background-attachment: fixed;
    height: 100vh;
    @media (max-width: 1024px) {
      background-attachment: scroll;
    }

    :before,
    :after {
      background-attachment: fixed;
      @media (max-width: 1024px) {
        background-attachment: scroll;
      }
    }
  }
`

const IndexPage = () => (
  <Layout location="/">
    <Header />
    <SEO title="Vicente Sarmiento" />
    <HeroContainer id="HeroContainer">
      <Hero />
    </HeroContainer>
    <WinAnnouncement />
    <Platform />
    <Parallax />
    <Videos />
    <BlogFeed />
    <HowToVoteVideoSection />
    <PopUpForm />
  </Layout>
)

export default IndexPage

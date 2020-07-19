import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import Videos from "../components/videos"
import Hero from "../components/hero"
import Platform from "../components/platform"
import Parallax from "../components/parallax"
import PopUpForm from "../components/PopUpForm"

const HeroContainer = styled.div`
  // @media (max-width: 767px) {
  //   margin-top: 91px;
  // }

  .HeroBackground {
    background-attachment: fixed;
    height: 100vh;
    @media (max-width: 1024px) {
      background-attachment: scroll;
    }

    :before, :after {
      background-attachment: fixed;
      @media (max-width: 1024px) {
        background-attachment: scroll;
      }
    }
  }
`

const IndexPage = () => (
  <Layout location="/">
    <PageHeader />
    <SEO title="Vicente Sarmiento" />
    <HeroContainer id="HeroContainer">
      <Hero />
    </HeroContainer>
    <Platform />
    <Parallax />
    <Videos />
    <PopUpForm />
  </Layout>
)

export default IndexPage

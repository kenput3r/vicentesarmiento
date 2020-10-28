import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import HowToVoteVideoSection from "../components/HowToVoteVideoSection"

const Container = styled.div`
  position: relative;
  top: 125px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 125px;
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

const HowToVote = () => {
  return (
    <Layout>
      <PageHeader />
      <SEO title="How To Vote In Santa Ana" />
      <Container>
        <HowToVoteVideoSection isPage={true} />
      </Container>
    </Layout>
  )
}

export default HowToVote

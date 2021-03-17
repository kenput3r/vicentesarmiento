import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"

const list = {
  organizations: [
    `Democratic Party of Orange County`,
    `Progressive Democrats of OC`,
    `Lavender Democrats of OC`,
    `Bernie Sanders DNC Delegates`,
    `CHISPA OC`,
    `Cooperative Campaigns OC`,
    `SEIU Local 721`,
    `Unite Here Local 11`,
    `Planned Parenthood`,
    `Vecindarios en Accion Lacy (VELA)`,
    `High School Democrats of America, Santa Ana Chapter`,
  ],
  electeds: [
    `Ada Briceno, Chair, Democratic Party of OC`,
    `Ahmad Zahra, Fullerton City Councilmember`,
    `Melissa Fox, Irvine City Councilmember`,
    `Walter Muneton, GGUSD Boardmember`,
    `Carolyn Torres, Trustee, SAUSD`,
    `Alfonso Alvarez, Trustee, SAUSD`,
    `Keri Kropke, Trustee, Brea Unified School District`,
    `Michelle Martinez, Former Councilmember of Santa Ana`,
    `Angie Amezcua, Former Councilmember of Santa Ana`,
    `David Benavides, Former Councilmember of Santa Ana`,
    `Roman Reyna, Former Councilmember of Santa Ana`,
    `Gina Clayton-Tarvin, President, OSVD Board of Directors`,
    `Sal Tinajero, Former Councilmember of Santa Ana`,
  ],
  commissioners: [
    `Larry Hitterdale, Historic Resources Commissioner`,
    `Richard Santana, Parks and Recs Commissioner`,
    `Norma Garcia Guillen, Planning Commissioner`,
    `Isabel Rivera, Personnel Board member`,
    `Carlos Perea, Measure X Commissioner`,
  ],
  leaders: [
    `Jessie Lopez, Candidate, Ward 5 Santa Ana`,
    `Leonel Velasquez, Delhi Neighborhood Leader`,
    `Desi Reyes, President, Saddleback View N.A.`,
    `Benjamin Vazquez, Educator, SAUSD`,
    `Erika Robles, United Across Borders Foundation`,
    `Oscar Rodriguez, Candidate, Huntington Beach City Council`,
  ],
}

const formatItem = item => {
  const parts = item.split(",")
  let regular_text = parts[0]
  let italicized = ""
  for (let i = 1; i < parts.length; i++) {
    italicized += ", " + parts[i]
  }
  return (
    <li>
      {regular_text}
      {italicized.length && <i>{italicized}</i>}
    </li>
  )
}
const Endorsements = () => {
  return (
    <Layout location="/">
      <SEO title="Vicente Sarmiento's Endorsments" />
      <PageHeader />
      <Page>
        <h1 className="page-title">Endorsements</h1>
        <div className="wrapper">
          <h2>Organizations</h2>
          <ul>
            {list.organizations.map(organization => (
              <li>{organization}</li>
            ))}
          </ul>
          <h2>Electeds/Former Elected</h2>
          <ul>{list.electeds.map(item => formatItem(item))}</ul>
          <h2>City Commissioners</h2>
          <ul>{list.commissioners.map(item => formatItem(item))}</ul>
          <h2>Community Leaders</h2>
          <ul>{list.leaders.map(item => formatItem(item))}</ul>
        </div>
      </Page>
    </Layout>
  )
}

export default Endorsements

const Page = styled.div`
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

  h1 {
    text-align: left;
  }

  .wrapper {
    text-align: left;
    padding: 0 10px 20px;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    li {
      list-style-type: none;
    }
  }
`

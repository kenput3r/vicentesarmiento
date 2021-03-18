import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import language from "../components/language"

const text = {
  h1: {
    english: `Meet Vicente Sarmiento`,
    spanish: `Conoce a Vicente Sarmiento`,
  },
  h1_small: {
    english: `Father. Husband. Councilmember.`,
    spanish: `Padre. Esposo. Concejal.`,
  },
  p1: {
    english: `Vicente Sarmiento has proudly represented Ward 1 on the Santa Ana City Council since 2007.`,
    spanish: `Vicente Sarmiento ha representado con orgullo al Distrito 1 en el Ayuntamiento de Santa Ana desde el 2007.`,
  },
  p2: {
    english: `Councilmember Sarmiento is currently the President of the Orange County Water District Board of Directors.  He also served as the City Council’s Mayor Pro Tem, and was Chairman of the Oversight Board of the Successor Agency to the former Redevelopment Agency for the City of Santa Ana.  Councilmember Sarmiento chaired the City Council Committees for Development, Transportation, and Legislation.  He was also a member of the Finance, Economic Development & Technology Committee.`,
    spanish: `El concejal Sarmiento es actualmente el presidente de la Mesa Directiva del Distrito de Agua del Condado de Orange. También se desempeñó como Alcalde Pro Temporal del Consejo de la Ciudad, y fue Presidente de la Junta de Supervisión de la Agencia Sucesora a la antigua Agencia de Reurbanización de la Ciudad de Santa Ana. El Concejal Sarmiento presidió sobre los Comités del Consejo de la Ciudad para el Desarrollo, el Transporte y la Legislación. También fue miembro del Comité de Finanzas, Desarrollo Económico y Tecnología.`,
  },
  p3: {
    english: `Councilmember Sarmiento’s priorities are increasing park space, reducing homelessness, providing more affordable housing for our working families, investing in youth programs, and supporting efforts to make our neighborhoods safer.  He helped draft the Housing Opportunity Ordinance, ensured that a fiscal reserve fund was created in the aftermath of the 2008 Economic Recession, and led the City Council’s adoption of public policies to protect the rights of all immigrants in Santa Ana.`,
    spanish: `Las prioridades del concejal Sarmiento son aumentar el espacio para parques, reducir la falta de vivienda, proporcionar viviendas más asequibles para nuestras familias trabajadoras, invertir en programas juveniles y apoyar los esfuerzos para hacer que nuestros vecindarios sean más seguros. El ayudó a redactar la Ordenanza de Oportunidades de Vivienda (HOO), se aseguró de que se creará un fondo de reserva fiscal después de la recesión económica del 2008 y dirigió la adopción de póliza para el público por parte del Concejo Municipal para proteger los derechos de todos los inmigrantes en Santa Ana.`,
  },
  p4: {
    english: `Councilmember Sarmiento graduated from the University of California, Berkeley with a Bachelor of Arts in Economics.  He received his Juris Doctorate from the University of California, Los Angeles School of Law.  More recently, he attended the Kennedy School of Government at Harvard University and successfully completed the Program for Senior Executives in State and Local Government.`,
    spanish: `El concejal Sarmiento se graduó de la Universidad de California, Berkeley con una licenciatura en economía. Recibió su Doctorado en Jurisprudencia de la Facultad de Derecho de la Universidad de California, Los Ángeles. Más recientemente, asistió a la Escuela de Gobierno ‘Kennedy’ de la Universidad de Harvard y completó con éxito el Programa para Altos 
    Ejecutivos del Gobierno Estatal y Local.
    `,
  },
  p5: {
    english: `Councilmember Sarmiento, his wife, Eva, and their three children live in a 1929 historic home they restored, just three blocks from where he grew up.  Their family has lived in Santa Ana and Orange County since 1965.`,
    spanish: `El concejal Sarmiento, su esposa, Eva, y sus tres hijos viven en una casa histórica de 1929 que restauraron, a solo tres cuadras de donde creció. Su familia ha vivido en Santa Ana y el Condado de Orange desde 1965.`,
  },
}

const AboutPage = () => {
  const Images = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "about-vicente-sarmiento.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      badge: file(relativePath: { eq: "vicente-con-la-gente-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location="/about">
      <PageHeader />
      <SEO title={text.h1[language]} />
      <Page>
        <div className="hero-container">
          <div className="heading-container">
            <h1 className="page-title">
              {text.h1[language]} <br />
              <small>{text.h1_small[language]}</small>
            </h1>
          </div>
          <Img
            fluid={Images.heroImage.childImageSharp.fluid}
            alt="Vicente Samrmiento and his family"
          />
        </div>
        <div className="content">
          <div
            style={{ textAlign: "center", maxWidth: 300, margin: "30px auto" }}
          >
            <Img
              fluid={Images.badge.childImageSharp.fluid}
              alt="Santa Ana buildings with text around it reading Vicente Con La Gente, Sarmiento"
            />
          </div>
          <p>{text.p1[language]}</p>
          <p>{text.p2[language]}</p>
          <p>{text.p3[language]}</p>
          <p>{text.p4[language]}</p>
          <p>{text.p5[language]}</p>
        </div>
      </Page>
    </Layout>
  )
}

export default AboutPage

const Page = styled.div`
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

  .hero-container {
    position: relative;
    width: 100%;

    .gatsby-image-wrapper {
      min-height: 300px;
    }
  }

  .heading-container {
    color: #fff;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    width: 100%;

    small {
      font-weight: normal;
      font-size: 16px;
    }
  }

  .content {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding: 10px;
  }
`

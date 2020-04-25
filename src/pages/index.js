import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{padding: `0 1.0875rem 1.45rem`}}>
      <div style={{maxWidth:960, margin:"0 auto"}}>
        <h2>About Vicente</h2>
        <p>Vicente Sarmiento has proudly represented Ward 1 on the Santa Ana City Council since 2007. </p>
        <p>Councilmember Sarmiento is currently the President of the Orange County Water District Board of Directors.  He also served as the City Council’s Mayor Pro Tem, and was Chairman of the Oversight Board of the Successor Agency to the former Redevelopment Agency for the City of Santa Ana.  Councilmember Sarmiento also chaired the City Council Committees for Development and Transportation, and Legislation, and he was a member of the Finance, Economic Development & Technology Committee.</p>
        <p>
        During his time on the City Council, Councilmember Sarmiento’s priorities are to increase park space, reduce homelessness, provide more affordable housing for our working families, invest in youth programs, and support efforts to make our neighborhoods safer.  He helped draft the Housing Opportunity Ordinance, ensured a fiscal reserve fund was created in the aftermath of the 2008 Economic Recession, and lead the City Council’s adoption of public policies to protect the rights of all immigrants in Santa Ana.
        </p>
        <p>
        Councilmember Sarmiento graduated from the University of California, Berkeley with a Bachelor of Arts in Economics.  He received his Juris Doctorate from the University of California, Los Angeles School of Law.  More recently, he attended the Kennedy School of Government at Harvard University and successfully completed the Program for Senior Executives in State and Local Government.
        </p>
        <p>
        Councilmember Sarmiento, his wife, Eva, and their three children live in a 1929 historic home they restored, just three blocks from where he grew up.  Their family has lived in Santa Ana and Orange County since 1965.
        </p>
      </div>
    </div>
    <Videos />
  </Layout>
)

export default IndexPage

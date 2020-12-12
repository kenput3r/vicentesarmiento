import React from "react"
import styled from "styled-components"

const SectionStyles = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 60px;
  @media (max-width: 500px) {
    padding: 15px;
  }
  .center {
    text-align: center;
  }
  a.button {
    background-color: rgb(34, 66, 137);
    border: 2px solid rgb(34, 66, 137);
    border-radius: 3px;
    color: #f1c80f;
    display: inline-block;
    font-weight: bold;
    padding: 20px;
    text-decoration: none;
    :hover {
      background-color: transparent;
      color: rgb(34, 66, 137);
    }
  }
`

const WinAnnouncement = () => {
  return (
    <SectionStyles>
      <h2 className="center">We Won!</h2>
      <p>
        The Orange County Registrar of Voters has "Certified" the election and
        with your support our team was able to run an extremely impressive
        campaign that set records.
      </p>
      <p>
        With a historic record breaking 79.0% voter turnout in Santa Ana and
        95,490 city residents casting ballots, we won the Mayor’s race by over
        10,000 votes with an impressive nearly 12% margin.
      </p>
      <p>
        This team effort could not have been achieved without the hard work of
        many great people who truly care about our City and its future.
      </p>
      <p>
        As Santa Ana’s first new mayor in 26 years, I am honored and humbled by
        our victory and the tremendous number of people who have graciously
        reached out since election night to offer their congratulations and
        encouraging words of support.
      </p>
      <p>
        I would also like to congratulate my new colleagues: Council
        Members-elect Thai Viet Phan, Johnathan Ryan Hernandez, & Jessie Lopez,
        for their equally impressive victories. I am excited for them and look
        forward to working with our excellent City Staff, to provide strong
        leadership for our residents and businesses.
      </p>
      <p>
        Thank you for electing me your next Mayor and I look forward to getting
        to work!
      </p>
    </SectionStyles>
  )
}

export default WinAnnouncement

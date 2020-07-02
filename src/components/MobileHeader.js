import React from "react"
import styled from "styled-components"
import language from "./language"
import MobileLogo from "./MobileLogo"

const Container = styled.nav`
  display: table;
  position: relative;
  width: 100%;
  z-index: 10;
  -webkit-box-shadow: 0 2px 2px 0 rgba(241,200,15,0.14), 0 3px 1px -2px rgba(241,200,15,0.12), 0 1px 5px 0 rgba(241,200,15,0.2);
  box-shadow: 0 2px 2px 0 rgba(241,200,15,0.14), 0 3px 1px -2px rgba(241,200,15,0.12), 0 1px 5px 0 rgba(241,200,15,0.2);
}
  div {
    position: relative;
    max-height: 75px;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`
const LogoContainer = styled.div`
  box-sizing: border-box;
  background-color: #224289;
  display: table-cell;
  padding: 10px;
  text-align: center;
  width: 50%;
  vertical-align: middle;
`
const DonateContainer = styled.div`
  background-color: #f1c80f;
  color: #224289f;
  display: table-cell;
  width: 30%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
`
const DonateButton = styled.a`
  color: #224289;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
`
const BurgerContainer = styled.div`
  background-color: #224289;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 20%;
`
const Burger = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
margin: 0 auto;

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: #f1c80f;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ drawerOpen }) => drawerOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ drawerOpen }) => drawerOpen ? '0' : '1'};
    transform: ${({ drawerOpen }) => drawerOpen ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ drawerOpen }) => drawerOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`

const MobileHeader = ({drawerOpen, setDrawerOpen}) => {
  const text = {
    donate: {
      english: `Donate`,
      spanish: `Donacion`
    }
  }
  return(
    <Container role="navigation">
      <LogoContainer>
        <MobileLogo />
      </LogoContainer>
      <DonateContainer>
        <DonateButton href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">{text.donate[language]}</DonateButton>
      </DonateContainer>
      <BurgerContainer>
        <Burger drawerOpen={drawerOpen} onClick={() => setDrawerOpen(!drawerOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
      </BurgerContainer>
    </Container>
  )
}
export default MobileHeader
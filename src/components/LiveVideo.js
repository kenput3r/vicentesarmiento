import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  top: ${props => props.headerHeight}px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: ${props => props.headerHeight}px;
  }
`
const LiveVideo = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  useEffect(() => {
    const Header = document.querySelector('header')
    setHeaderHeight(Header.offsetHeight)
  })
  return (
    <Container headerHeight={headerHeight}>
      <div id="fb-root"></div>
      <div className="videoWrapper">
        <div className="fb-video" data-href="https://www.facebook.com/SarmientoForMayor/videos/936660723479447/" data-show-text="false" data-width="1500" data-autoplay="true"><blockquote cite="https://developers.facebook.com/finchling/videos/936660723479447/" className="fb-xfbml-parse-ignore"></blockquote></div>
      </div>
    </Container>

  )
}

export default LiveVideo
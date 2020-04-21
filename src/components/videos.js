import React from "react"

const Videos = () => (
  <div style={{backgroundColor:"#ffffff", padding:"30px 0"}}>
    <div style={{maxWidth:960, margin:"0 auto"}}>
      <h2>From Vicente</h2>
      <div className="videoWrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Riu2-ytGg5c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
)

export default Videos
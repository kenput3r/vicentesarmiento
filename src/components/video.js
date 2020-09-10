import React from "react"

const Video = ({ src, title }) => {
  return (
    <div className="videoWrapper">
      <iframe
        title={title}
        width="1920"
        height="1080"
        src={src + "?rel=0"}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video

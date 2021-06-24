import React from "react"
import language from "./language"

const Videos = () => {
  const text = {
    h2: {
      english: `COVID-19 Update`,
      spanish: `Mensaje De Vicente`,
    },
  }
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px 0",
        marginBottom: 30,
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <h2>{text.h2[language]}</h2>
        <div className="videoWrapper">
          <iframe
            title="Santa Ana Update On Covid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6ItE5gVRb0g?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Videos
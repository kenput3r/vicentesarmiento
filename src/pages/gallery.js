import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import Video from "../components/video"
import language from "../components/language"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

import image1 from "../images/gallery/vicente-sarmiento-1.jpg"
import image2 from "../images/gallery/vicente-sarmiento-2.jpg"
import image3 from "../images/gallery/vicente-sarmiento-3.jpg"
import image4 from "../images/gallery/vicente-sarmiento-4.jpg"
import image5 from "../images/gallery/vicente-sarmiento-5.jpg"
import image6 from "../images/gallery/vicente-sarmiento-6.jpg"
import image7 from "../images/gallery/vicente-sarmiento-7.jpg"
import image8 from "../images/gallery/vicente-sarmiento-8.jpg"
import image9 from "../images/gallery/vicente-sarmiento-9.jpg"
import image10 from "../images/gallery/vicente-sarmiento-10.jpg"
import image11 from "../images/gallery/vicente-sarmiento-11.jpg"
import image12 from "../images/gallery/vicente-sarmiento-12.jpg"
import image13 from "../images/gallery/vicente-sarmiento-13.jpg"
import image14 from "../images/gallery/vicente-sarmiento-14.jpg"
import image15 from "../images/gallery/vicente-sarmiento-15.jpg"
import image16 from "../images/gallery/vicente-sarmiento-16.jpg"
import image17 from "../images/gallery/vicente-sarmiento-17.jpg"
import image18 from "../images/gallery/vicente-sarmiento-18.jpg"
import image19 from "../images/gallery/vicente-sarmiento-19.jpg"
import image20 from "../images/gallery/vicente-sarmiento-20.jpg"
import image21 from "../images/gallery/vicente-sarmiento-21.jpg"
import image22 from "../images/gallery/vicente-sarmiento-22.jpg"

const video1 =
  "https://drive.google.com/uc?export=download&id=1OAh7wgQC1MRyYR1NWcqVk5Ol9i-nBzWx"
const video2 =
  "https://drive.google.com/uc?export=download&id=1IRddnes0F5o5DJf3sva_M60T-EPd0TnX"
const video3 =
  "https://drive.google.com/uc?export=download&id=1y3GJb4miP_NAcvG72kAd_DbidYgDTapc"
const video4 =
  "https://drive.google.com/uc?export=download&id=1_RgQttnXh5WhtfjgAjKAPYeaxoXoOar7"
const video5 =
  "https://drive.google.com/uc?export=download&id=1GyTFQwCvCwMZ_MDTojy21I8rcKJ1Jjzx"
const video6 =
  "https://drive.google.com/uc?export=download&id=12D2XcT37yipBLsQrQ5rPwYyJQrOY1UhJ"
const video7 =
  "https://drive.google.com/uc?export=download&id=1DNDfaqWaIVgyJxXdekG1s0jnNzWO6IRn"
const video8 =
  "https://drive.google.com/uc?export=download&id=1Eyp0P2kn1Ykq35Y6Vmp_-YwKrdI6EK9o"
const video9 =
  "https://drive.google.com/uc?export=download&id=1RBmgLRuAgBaH1Y4_tonDQph9n5-9fpN2"
const video10 =
  "https://drive.google.com/uc?export=download&id=178-HT58-GPEyCwYq4PFwngoumCsHkXj_"
const video11 =
  "https://drive.google.com/uc?export=download&id=1x2VqIfgv21sah7SnCM2zLGP6jB89vJ_w"
const video12 =
  "https://drive.google.com/uc?export=download&id=1Quck3Q9YM4VyWE8GmIo8irFJhoMJxjsH"

const videos = [
  {
    download: video1,
    embed: "https://www.youtube.com/embed/031kkVNVm5Y",
    title: {
      english: "Vicente Sarmiento Announces Santa Ana Mayoral Campaign",
      spanish: ``,
    },
  },
  {
    download: video2,
    embed: "https://www.youtube.com/embed/Riu2-ytGg5c",
    title: {
      english:
        "Update: California Moratorium on Evictions and Foreclosures 4/1/20",
      spanish: ``,
    },
  },
  {
    download: video3,
    embed: "https://www.youtube.com/embed/_e5dMzqlrfw",
    title: {
      english: "Sarmiento Health Message - English",
      spanish: ``,
    },
  },
  {
    download: video4,
    embed: "https://www.youtube.com/embed/BhFNnes2t20",
    title: {
      english: "Sarmiento Health Message - Spanish",
      spanish: ``,
    },
  },
  {
    download: video5,
    embed: "https://www.youtube.com/embed/5Ni2wrR3vUw",
    title: {
      english: "Sarmiento Water District Health Message - English",
      spanish: ``,
    },
  },
  {
    download: video6,
    embed: "https://www.youtube.com/embed/ULfPC5iR5IQ",
    title: {
      english: "Sarmiento Water District Health Message - Spanish",
      spanish: ``,
    },
  },
  {
    download: video7,
    embed: "https://www.youtube.com/embed/gy5e6uUDi5o",
    title: {
      english: "Investing In Santa Ana's Youth",
      spanish: ``,
    },
  },
  {
    download: video8,
    embed: "https://www.youtube.com/embed/BCNOhP9wzAU",
    title: {
      english: "Reducing Homelessness In Santa Ana",
      spanish: ``,
    },
  },
  {
    download: video9,
    embed: "https://www.youtube.com/embed/047rUUQEy08",
    title: {
      english: "Safer Neighborhoods In Santa Ana",
      spanish: ``,
    },
  },
  {
    download: video10,
    embed: "https://www.youtube.com/embed/Mgy8CqE6B_4",
    title: {
      english: "Public Health In Santa Ana",
      spanish: ``,
    },
  },
  {
    download: video11,
    embed: "https://www.youtube.com/embed/_jvr5uDdVTc",
    title: {
      english: "Affordable Housing In Santa Ana",
      spanish: ``,
    },
  },
  {
    download: video12,
    embed: "https://www.youtube.com/embed/V13u6qzwLEA",
    title: {
      english: "Eva Casas Sarmiento On Vicente's Candidacy",
      spanish: ``,
    },
  },
]

const Container = styled.div`
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
`
const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`
const H2 = styled.h2`
  padding-top: 0;
  padding-bottom: 7px;
  border-bottom: 5px solid rgb(34, 66, 137);
  margin: 0 15px 15px;
`
const Button = styled.a`
  color: #fff;
  background-color: rgb(34, 66, 137);
  display: inline-block;
  padding: 10px;
  border: 2px solid rgb(34, 66, 137);
  margin-top: 10px;
  text-decoration: none;
  font-weight: bold;
  :hover {
    color: rgb(34, 66, 137);
    background-color: #fff;
  }
`
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
]
const image_alts = []
image_alts[0] = "Vicente Sarmiento standing by a ballot drop box"
image_alts[1] = "Vicente Sarmiento standing with his arms crossed"
image_alts[2] = "Vicente Sarmiento near a wall with a plaque reading Santa Ana"
image_alts[3] = "Vicente Sarmiento standing against a wall covered in art"
image_alts[4] = "Vicente Sarmiento touring a factory"
image_alts[5] = "Vicente Sarmiento visiting a local business"
image_alts[6] = "Vicente Sarmiento with his family"
image_alts[7] = "Vicente Sarmiento with his family looking at a computer"
image_alts[8] = "Vicente Sarmiento with has family and family dog"
image_alts[9] = "Vicente Sarmiento at his desk"
image_alts[10] = "Vicente Sarmiento with friends in downtown Santa Ana"
image_alts[11] = "Vicente Sarmiento at the Santa Sna train station entrance"
image_alts[12] =
  "Vicente Sarmiento at the Santa Ana train station near the boarding area"
image_alts[13] = "Close up photograph of Vicente Sarmiento"
image_alts[14] = "Close up photograph of Vicente Sarmiento holding his chin"
image_alts[15] =
  "Close up photograph of Vicente Sarmiento holding his suit jacket"
image_alts[16] =
  "Close up photograph of Vicente Sarmiento at the Santa Ana train station near the boarding area"
image_alts[17] = "Vicente Sarmiento at a food drive"
image_alts[18] = "Vicente Sarmiento at the Delhi Center"
image_alts[19] = "Vicente Sarmiento with firefighters"
image_alts[20] = "Vicente Sarmiento Santa Ana Police"
image_alts[21] = "Vicente Sarmiento sitting at his desk"

const Gallery = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeImage, setActiveImage] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(false)
  const [embedUrl, setEmbedUrl] = useState(false)
  const [activeVideoTitle, setActiveVideoTitle] = useState(false)
  const open = (src, index) => {
    setActiveImageIndex(index)
    setActiveImage(src)
    setShowDialog(true)
    return false
  }
  const close = () => {
    setShowDialog(false)
  }
  const openVideo = (embedUrl, downloadUrl, title) => {
    setEmbedUrl(embedUrl)
    setActiveVideo(downloadUrl)
    setActiveVideoTitle(title)
    setShowVideo(true)
    return false
  }
  const handleKeyDown = (event, callback) => {
    if (event.keyCode === 13) {
      callback()
    }
  }
  const text = {
    h1: {
      english: `Media`,
      spanish: `Fotos Y Videos`,
    },
    videos: {
      english: `Videos`,
      spanish: `Videos`,
    },
    photos: {
      english: `Photos`,
      spanish: `Fotos`,
    },
    download: {
      english: `download`,
      spanish: `descargar`,
    },
    close: {
      english: `close`,
      spanish: `salida`,
    },
  }
  return (
    <Layout location="/gallery">
      <PageHeader />
      <SEO title="Downloadable Media With Vicente Sarmiento" />
      <Container className="content">
        <h1 className="page-title">{text.h1[language]}</h1>
        <Wrapper>
          <div style={{ textAlign: "left", width: "100%" }}>
            <H2>{text.videos[language]}</H2>
          </div>
          {videos.map((video, index) => {
            if (index !== 7) {
              return (
                <div className="gallery-image video" key={`video` + index}>
                  <a
                    role="button"
                    tabIndex="0"
                    key={`thumb-${index}`}
                    onClick={() =>
                      openVideo(
                        video.embed,
                        video.download,
                        video.title[language]
                      )
                    }
                    onKeyDown={event =>
                      handleKeyDown(event, () =>
                        openVideo(
                          video.embed,
                          video.download,
                          video.title[language]
                        )
                      )
                    }
                  >
                    <Img
                      fluid={data[`video${index + 1}`].childImageSharp.fluid}
                      alt={image_alts[index]}
                    />
                  </a>
                  <p style={{ textAlign: "left", padding: "1.5%" }}>
                    {video.title[language]}
                  </p>
                </div>
              )
            } else {
              return
            }
          })}
          <div>
            <Button
              href="https://drive.google.com/drive/folders/1OJG7TJFEis1lmklRz2lZFBY3QySrB-mT?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              ADDITIONAL VIDEOS
            </Button>
          </div>
          <div style={{ textAlign: "left", marginTop: 20, width: "100%" }}>
            <H2>{text.photos[language]}</H2>
          </div>
          {images.map((image, index) => (
            <div className="gallery-image" key={`thumb-${index}`}>
              <a
                role="button"
                tabIndex="0"
                key={`thumb-${index}`}
                onClick={() => open(image, index)}
                onKeyDown={event =>
                  handleKeyDown(event, () => open(image, index))
                }
              >
                <Img
                  fluid={data[`img${index + 1}`].childImageSharp.fluid}
                  alt={image_alts[index]}
                />
              </a>
            </div>
          ))}
          <div>
            <Button
              href="https://drive.google.com/drive/folders/11P4yF5cHRy1RBRawulfmH8pJixqqkbIQ?usp=sharing"
              target="_blank"
              rel="noopener"
            >
              ADDITIONAL PHOTOS
            </Button>
          </div>
        </Wrapper>
      </Container>
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        aria-label="a picture"
        style={{ zIndex: 101 }}
      >
        <div>
          {activeImage ? (
            <Img
              fluid={data[`img${activeImageIndex + 1}b`].childImageSharp.fluid}
              alt={image_alts[activeImageIndex]}
            />
          ) : (
            ""
          )}
          <p>
            <span>
              <a
                role="button"
                tabIndex="0"
                onClick={close}
                onKeyDown={event => handleKeyDown(event, close)}
                style={{
                  color: "#224289",
                  cursor: "pointer",
                  marginTop: 5,
                  padding: 5,
                  display: "inline-block",
                }}
              >
                &times; {text.close[language]}
              </a>
            </span>
            <span>
              <a
                href={activeImage}
                download
                style={{
                  textDecoration: "none",
                  color: "#224289",
                  float: "right",
                  marginTop: 5,
                  padding: 5,
                  display: "inline-block",
                }}
              >
                &darr; {text.download[language]}
              </a>
            </span>
          </p>
        </div>
      </Dialog>
      <Dialog
        isOpen={showVideo}
        onDismiss={() => setShowVideo(false)}
        aria-label="a video"
        style={{ zIndex: 101 }}
      >
        <div>
          {activeVideo ? <Video src={embedUrl} title={activeVideoTitle} /> : ""}
          <p>{activeVideoTitle}</p>
          <p>
            <span>
              <a
                role="button"
                tabIndex="0"
                onClick={() => setShowVideo(false)}
                onKeyDown={event =>
                  handleKeyDown(event, () => setShowVideo(false))
                }
                style={{
                  color: "#224289",
                  cursor: "pointer",
                  marginTop: 5,
                  padding: 5,
                  display: "inline-block",
                }}
              >
                &times; {text.close[language]}
              </a>
            </span>
            <span>
              <a
                href={activeVideo}
                download
                style={{
                  textDecoration: "none",
                  color: "#224289",
                  float: "right",
                  marginTop: 5,
                  padding: 5,
                  display: "inline-block",
                }}
              >
                &darr; {text.download[language]}
              </a>
            </span>
          </p>
        </div>
      </Dialog>
    </Layout>
  )
}

export const Images = graphql`
  query {
    img1: file(relativePath: { eq: "gallery/vicente-sarmiento-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img1b: file(relativePath: { eq: "gallery/vicente-sarmiento-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "gallery/vicente-sarmiento-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2b: file(relativePath: { eq: "gallery/vicente-sarmiento-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "gallery/vicente-sarmiento-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3b: file(relativePath: { eq: "gallery/vicente-sarmiento-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "gallery/vicente-sarmiento-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4b: file(relativePath: { eq: "gallery/vicente-sarmiento-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "gallery/vicente-sarmiento-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5b: file(relativePath: { eq: "gallery/vicente-sarmiento-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "gallery/vicente-sarmiento-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6b: file(relativePath: { eq: "gallery/vicente-sarmiento-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "gallery/vicente-sarmiento-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7b: file(relativePath: { eq: "gallery/vicente-sarmiento-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "gallery/vicente-sarmiento-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8b: file(relativePath: { eq: "gallery/vicente-sarmiento-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "gallery/vicente-sarmiento-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9b: file(relativePath: { eq: "gallery/vicente-sarmiento-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "gallery/vicente-sarmiento-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10b: file(relativePath: { eq: "gallery/vicente-sarmiento-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11: file(relativePath: { eq: "gallery/vicente-sarmiento-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img11b: file(relativePath: { eq: "gallery/vicente-sarmiento-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12: file(relativePath: { eq: "gallery/vicente-sarmiento-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img12b: file(relativePath: { eq: "gallery/vicente-sarmiento-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13: file(relativePath: { eq: "gallery/vicente-sarmiento-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img13b: file(relativePath: { eq: "gallery/vicente-sarmiento-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14: file(relativePath: { eq: "gallery/vicente-sarmiento-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img14b: file(relativePath: { eq: "gallery/vicente-sarmiento-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15: file(relativePath: { eq: "gallery/vicente-sarmiento-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img15b: file(relativePath: { eq: "gallery/vicente-sarmiento-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16: file(relativePath: { eq: "gallery/vicente-sarmiento-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img16b: file(relativePath: { eq: "gallery/vicente-sarmiento-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img17: file(relativePath: { eq: "gallery/vicente-sarmiento-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img17b: file(relativePath: { eq: "gallery/vicente-sarmiento-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img18: file(relativePath: { eq: "gallery/vicente-sarmiento-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img18b: file(relativePath: { eq: "gallery/vicente-sarmiento-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img19: file(relativePath: { eq: "gallery/vicente-sarmiento-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img19b: file(relativePath: { eq: "gallery/vicente-sarmiento-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img20: file(relativePath: { eq: "gallery/vicente-sarmiento-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img20b: file(relativePath: { eq: "gallery/vicente-sarmiento-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img21: file(relativePath: { eq: "gallery/vicente-sarmiento-21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img21b: file(relativePath: { eq: "gallery/vicente-sarmiento-21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img22: file(relativePath: { eq: "gallery/vicente-sarmiento-22.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img22b: file(relativePath: { eq: "gallery/vicente-sarmiento-22.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video1: file(relativePath: { eq: "gallery/video1-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video2: file(relativePath: { eq: "gallery/video2-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video3: file(relativePath: { eq: "gallery/video3-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video4: file(relativePath: { eq: "gallery/video4-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video5: file(relativePath: { eq: "gallery/video5-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video6: file(relativePath: { eq: "gallery/video6-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video7: file(relativePath: { eq: "gallery/video7-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video8: file(relativePath: { eq: "gallery/video8-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video9: file(relativePath: { eq: "gallery/video9-poster.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video10: file(relativePath: { eq: "gallery/video10-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video11: file(relativePath: { eq: "gallery/video11-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    video12: file(relativePath: { eq: "gallery/video12-poster.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Gallery

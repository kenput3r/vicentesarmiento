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

const Gallery = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [activeImage, setActiveImage] = useState(false)
  const [activeImageAlt, setActiveImageAlt] = useState("")
  const [activeVideo, setActiveVideo] = useState(false)
  const [embedUrl, setEmbedUrl] = useState(false)
  const [activeVideoTitle, setActiveVideoTitle] = useState(false)
  const open = (e, image, index) => {
    e.preventDefault()
    setActiveImage(image.node.localFile.childImageSharp.fluid)
    setActiveImageAlt(image.node.altText)
    setShowDialog(true)
    return false
  }
  const close = e => {
    e.preventDefault()
    setShowDialog(false)
  }
  const openVideo = (e, embedUrl, downloadUrl, title) => {
    console.log("downloadUrl", downloadUrl)
    e.preventDefault()
    setEmbedUrl(embedUrl)
    setActiveVideo(downloadUrl)
    setActiveVideoTitle(title)
    setShowVideo(true)
  }
  const closeVideo = e => {
    e.preventDefault()
    setShowVideo(false)
  }
  const handleKeyDown = (event, callback) => {
    if (event.keyCode === 13) {
      callback(event)
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
          {data.allVideosJson.edges.map(video => {
            return (
              <div className="gallery-image video" key={video.node.id}>
                <a
                  href="/"
                  role="button"
                  tabIndex="0"
                  onClick={e =>
                    openVideo(
                      e,
                      video.node.url,
                      video.node.urlDownload,
                      video.node.title[language]
                    )
                  }
                  onKeyDown={event =>
                    handleKeyDown(event, e =>
                      openVideo(
                        e,
                        video.node.url,
                        video.node.urlDownload,
                        video.node.title[language]
                      )
                    )
                  }
                >
                  <Img
                    fluid={video.node.thumbnail.childImageSharp.fluid}
                    alt={video.node.title[language]}
                  />
                </a>
                <p style={{ textAlign: "left", padding: "1.5%" }}>
                  {video.node.title[language]}
                </p>
              </div>
            )
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
          {data.allWpPost.edges.map(({ node: post }) => (
            <div className="gallery-image" key={post.featuredImage.node.id}>
              <a
                href="/"
                role="button"
                tabIndex="0"
                onClick={e => open(e, post.featuredImage)}
                onKeyDown={event => handleKeyDown(event, () => open(post.featuredImage))}
              >
                <Img
                  fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
                  alt={post.featuredImage.node.altText}
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
        onDismiss={e => close(e)}
        aria-label="a picture"
        style={{ zIndex: 101 }}
      >
        <div>
          {activeImage ? <Img fluid={activeImage} alt={activeImageAlt} /> : ""}
          <p>
            <span>
              <a
                href="/"
                role="button"
                tabIndex="0"
                onClick={e => close(e)}
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
                href={activeImage.src}
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
        onDismiss={e => closeVideo(e)}
        aria-label="a video"
        style={{ zIndex: 101 }}
      >
        <div>
          {activeVideo ? <Video src={embedUrl} title={activeVideoTitle} /> : ""}
          <p>{activeVideoTitle}</p>
          <p>
            <span>
              <a
                href="/"
                role="button"
                tabIndex="0"
                onClick={e => closeVideo(e)}
                onKeyDown={event => handleKeyDown(event, e => closeVideo(e))}
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

export const query = graphql`
  query GalleryQuery {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Media Image"}}}}}) {
      edges {
        node {
          title
          featuredImage {
            node {
              id
              mediaItemUrl
              mediaType
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }

    allVideosJson {
      edges {
        node {
          id
          title {
            english
            spanish
          }
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          url
          urlDownload
        }
      }
    }
  }
`

export default Gallery

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

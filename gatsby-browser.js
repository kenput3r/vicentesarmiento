/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// exports.onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     //import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }
const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  script.crossOrigin = "anonymous"
  script.nonce = "fErZCaqU"
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=231243003601318&autoLogAppEvents=1")
  }
}
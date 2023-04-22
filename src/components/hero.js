import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { heroTextStyle, fourthTextStyle } from "./hero.module.css"
import Button from 'react-bootstrap/Button'

const Hero = ({heroText,secondaryText,tertiaryText,fourthText,heroImgRelPath}) => {
  
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData(aspectRatio: 3, layout: FULL_WIDTH, formats: AUTO)
          }
          relativePath
        }
      }
    }
  `)
  
  const imageNodes = data.allFile.nodes;
  const selectedImage = imageNodes.filter(img => img.relativePath === heroImgRelPath)
  const image = getImage(selectedImage[0].childImageSharp)
 
  return (
    <div style={{ display: "grid", height: "85vh" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <GatsbyImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
       
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        image={image}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "stretch",
          display: "grid",
          background: 'black',
          opacity: '0.6',
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className={heroTextStyle + " text-center mx-auto"}>
          <h1 className="mt-3">{heroText}</h1>
          <p className={fourthTextStyle}>{secondaryText}<br/>{tertiaryText}</p>
        </div>
        <div className={heroTextStyle + " text-center mx-auto"}>
          <p className={fourthTextStyle}>{fourthText}</p>
        </div>
        <div className="text-center">
          <Button variant="primary">See What I Can Do For You!</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
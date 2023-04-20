import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { heroTextStyle } from "./hero.module.css"

const Hero = ({heroText,secondaryText,tertiaryText,heroImgRelPath}) => {
  
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
    <div style={{ display: "grid" }}>
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
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1 className={heroTextStyle}>{heroText}</h1>
        <p className={heroTextStyle + " text-center"}>{secondaryText}<br/>{tertiaryText}</p>
        <p></p>
      </div>
    </div>
  )
}

export default Hero
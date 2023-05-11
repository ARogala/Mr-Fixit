import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const GalleryPage = ({data}) => {
	console.log(data)
	return (
		<Layout>
			add gallery images here
		</Layout>
	)
}

export const query = graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData( layout: FULL_WIDTH, formats: AUTO)
          }
          relativeDirectory
        }
      }
    }
  `

export default GalleryPage

export const Head = () => (
	<Seo />
)
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import { Seo } from "../components/seo"

import { galleryMaxWidth } from "./gallery.module.css"

const GalleryPage = ({data}) => {
	function buildImages() {
		const images = data.allFile.nodes;
		const imgDOM = images.map((img,index)=>{
			const image = getImage(img.childImageSharp)
			return(
				<Col xs={12} md={6} lg={6} className="pb-4" key={index}>
					<GatsbyImage image={image} alt=""/>
				</Col>
			);
		});
		return imgDOM;
	}
	return (
		<Layout>
			<Container fluid className={galleryMaxWidth + " pt-5"}>
				<Row>{buildImages()}</Row>
			</Container>
		</Layout>
	)
}

export const query = graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "gallery"}}, sort: {name: ASC}) {
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
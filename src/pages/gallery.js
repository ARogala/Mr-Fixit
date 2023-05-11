import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const GalleryPage = ({data}) => {
	console.log(data)
	return (
		<Layout>
			<Container fluid className="pt-5">
				<Row>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
				</Row>
				<Row>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
				</Row>
				<Row>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
				</Row>
				<Row>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
				</Row>
				<Row>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
					<Col>
						<StaticImage src="../images/services/handyman.jpg" alt="handy man" />
					</Col>
				</Row>

			</Container>
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
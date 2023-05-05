import * as React from "react"
import { StaticImage, GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { Link, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Layout from '../components/layout'
import { Seo } from "../components/seo"
import Button from 'react-bootstrap/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'

import { heroContainer, heroTextContainer, heroBtnContainer, artDirected, cardContainer } from "./index.module.css"

const IndexPage = ({data}) => {
  console.log(data);
  const images = withArtDirection(getImage(data.allFile.nodes[7].childImageSharp), [
    {
      media: "(max-width: 950px)",
      image: getImage(data.allFile.nodes[9].childImageSharp),
    },
  ])
  return (
    <main>
      <Layout>
        <Container fluid className="p-0">
          <div className={heroContainer}>
            <GatsbyImage 
              image={images}
              alt="" 
              className={artDirected}
            />
            <div className={heroTextContainer}>
              <h1 className="mt-2 mb-2">Mr. Fix It LLC.</h1>
              <p>Salida Colorado's best handyman service.<br/>Here to make your home repairs and remodeling easy.</p>
              <p>
                Hi, I'm T.J. Reid founder of Mr. Fix It LLC. I have been working in construction since 2000 
                and have over 20 years of experience! I strive to make my clients happy and would love to 
                help make your renovation or project a reality.
              </p>
            </div>
            <div className={heroBtnContainer}>
              <Button variant="primary" onClick={() => scrollTo('#scroll-to')}>See What I Can Do For You!</Button>
            </div>
          </div>
          <div id="scroll-to" style={{height: "60px"}}></div>
          <h1 className="text-center mb-4 mt-4">Mr. Fix It Services</h1>
          <Row>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>General Handyman</h2></Card.Title>
                  <Card.Text>
                    Drywall<br/>Windows<br/>Flooring
                  </Card.Text>
                  <div className="text-center"><Link to="/general-handyman">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/carpentry.jpg" alt="carpentry" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Carpentry</h2></Card.Title>
                  <Card.Text>
                    Mantles<br/>Shelving<br/>Molding
                  </Card.Text>
                  <div className="text-center"><Link to="/carpentry">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/kitchen.jpg" alt="kitchen and bath" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Kitchen and Bath</h2></Card.Title>
                  <Card.Text>
                     Countertops<br/>Cabinets<br/>Fixtures
                  </Card.Text>
                  <div className="text-center"><Link to="/kitchen-bath">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/tile.jpg" alt="tile work" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Tile</h2></Card.Title>
                  <Card.Text>
                     Ceramic<br/>Stone<br/>Porcelain
                  </Card.Text>
                  <div className="text-center"><Link to="/tile">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/painting.jpg" alt="painting" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Painting</h2></Card.Title>
                  <Card.Text>
                     Decks<br/>Doors<br/>Walls/Ceilings
                  </Card.Text>
                  <div className="text-center"><Link to="/painting">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={cardContainer + " mx-auto mb-4"}>
                <StaticImage src="../images/services/cleanup.jpg" alt="painting" className="card-img-top" />
                <Card.Body>
                  <Card.Title className="text-center"><h2>Clean Ups</h2></Card.Title>
                  <Card.Text>
                     Leaves<br/>Shrub/Bush Removal<br/>Construction Sites
                  </Card.Text>
                  <div className="text-center"><Link to="/clean-ups">Click for more details</Link></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>    
      </Layout>
    </main>
  )
}

export const query = graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            gatsbyImageData( layout: FULL_WIDTH, formats: AUTO)
          }
          relativePath
        }
      }
    }
  `

export default IndexPage

export const Head = () => (
  <Seo />
)

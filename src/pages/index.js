import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Layout from '../components/layout'
import { Seo } from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Container fluid className="p-0">
          <div>
            <Hero 
              heroText="Mr. Fix It LLC." 
              secondaryText="Salida Colorado's best handyman service." 
              tertiaryText="Here to make your home repairs and remodeling easy." 
              fourthText="Hi, I'm T.J. Reid founder of Mr. Fix It LLC. I have been working in construction since 2000 
                and have over 20 years of experience! I strive to make my clients happy and would love to 
                help make your renovation or project a reality."
              heroImgRelPath="hero-med.jpg"> 
            </Hero>
          </div>
          <h1 id="index-h1" className="text-center mb-4 mt-4">Mr. Fix It Services</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="card-img-top" />
                <Card.Body>
                  <Card.Title>General Handyman</Card.Title>
                  <Card.Text>
                    Drywall<br/>Windows<br/>Flooring
                  </Card.Text>
                  <Link to="/general-handyman">Click for more details</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <StaticImage src="../images/services/carpentry.jpg" alt="carpentry" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Carpentry</Card.Title>
                  <Card.Text>
                    Mantles<br/>Shelving<br/>Molding
                  </Card.Text>
                  <Link to="/">Click for more details</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <StaticImage src="../images/services/kitchen.jpg" alt="kitchen and bath" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Kitchen and Bath</Card.Title>
                  <Card.Text>
                     Countertops<br/>Cabinets<br/>Fixtures
                  </Card.Text>
                  <Link to="/">Click for more details</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <StaticImage src="../images/services/tile.jpg" alt="tile work" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Tile</Card.Title>
                  <Card.Text>
                     Ceramic<br/>Stone<br/>Porcelain
                  </Card.Text>
                  <Link to="/">Click for more details</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className="mx-auto mb-4">
                <StaticImage src="../images/services/painting.jpg" alt="painting" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Painting</Card.Title>
                  <Card.Text>
                     Decks<br/>Doors<br/>Walls/Ceilings
                  </Card.Text>
                  <Link to="/">Click for more details</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>    
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

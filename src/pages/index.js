import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <h1> Mr. Fix It Services</h1>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="card-img-top" />
              <Card.Body>
                <Card.Title>General Handyman</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <StaticImage src="../images/services/carpentry.jpg" alt="carpentry" className="card-img-top" />
              <Card.Body>
                <Card.Title>Carpentry</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <StaticImage src="../images/services/kitchen.jpg" alt="kitchen and bath" className="card-img-top" />
              <Card.Body>
                <Card.Title>Kitchen and Bath</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <StaticImage src="../images/services/tile.jpg" alt="tile work" className="card-img-top" />
              <Card.Body>
                <Card.Title>Tile</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <StaticImage src="../images/services/painting.jpg" alt="painting" className="card-img-top" />
              <Card.Body>
                <Card.Title>Painting</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

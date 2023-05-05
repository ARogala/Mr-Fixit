import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Seo } from "../components/seo"
import Hero from "../components/hero"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';

const GeneralHandyman = () => {
  return (
    <Layout>
      <div><Hero heroText="Mr. Fix It LLC." secondaryText="General Handyman Service's" heroImgRelPath="services/handyman.jpg"></Hero></div>
      <h1 className="text-center mb-4 mt-4">Handyman Services I Offer</h1>
      <Container>
        <Row>
          <Col className="pt-4" xs={12} sm={12} md={6} lg={8} xl={5}>
            <Carousel>
              <Carousel.Item>
                <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/services/handyman.jpg" alt="handy man" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="pt-4" xs={12} sm={12} md={6} lg={4} xl={7}>
            <ListGroup as="ul" numbered variant="flush">
              <ListGroup.Item as="li">Door hinges</ListGroup.Item>
              <ListGroup.Item as="li">Build shelving</ListGroup.Item>
              <ListGroup.Item as="li">Build storage</ListGroup.Item>
              <ListGroup.Item as="li">Molding installation - base or crown</ListGroup.Item>
              <ListGroup.Item as="li">Painting</ListGroup.Item>
              <ListGroup.Item as="li">Install drywall / repair drywall / texture drywall</ListGroup.Item>
              <ListGroup.Item as="li">Install door locks / repair door locks</ListGroup.Item>
              <ListGroup.Item as="li">Hang doors / repair doors / replace doors</ListGroup.Item>
              <ListGroup.Item as="li">Install windows / repair windows / replace windows</ListGroup.Item>
              <ListGroup.Item as="li">Install blinds / install curtains</ListGroup.Item>
              <ListGroup.Item as="li">Floor Installation or Repair</ListGroup.Item>
              <ListGroup.Item as="li">Hanging doors</ListGroup.Item>
              <ListGroup.Item as="li">General Handyman Repairs</ListGroup.Item>
              <ListGroup.Item as="li">Fixing leaks</ListGroup.Item>
              <ListGroup.Item as="li">Plumbing in sinks</ListGroup.Item>
              <ListGroup.Item as="li">Installing washing machines</ListGroup.Item>
              <ListGroup.Item as="li">Repairing flush mechanisms on toilets</ListGroup.Item>
              <ListGroup.Item as="li">Replacing / adding new sockets</ListGroup.Item>
              <ListGroup.Item as="li">Replacing light switches</ListGroup.Item>
              <ListGroup.Item as="li">Fitting Lights</ListGroup.Item>
              <ListGroup.Item as="li">Painting</ListGroup.Item>
              <ListGroup.Item as="li">Sealing</ListGroup.Item>
              <ListGroup.Item as="li">Grouting</ListGroup.Item>
              <ListGroup.Item as="li">Tiling</ListGroup.Item>
              <ListGroup.Item as="li">Putting up shelves</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>  
    </Layout>
  )
}

export default GeneralHandyman

export const Head = () => (
  <Seo />
)

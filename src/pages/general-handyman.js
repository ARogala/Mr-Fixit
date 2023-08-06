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
      <style jsx>
        {`
          .container-main {
            max-width: 700px;
          }
        `}
      </style>
      <div><Hero heroText="Mr. Fix It LLC." secondaryText="General Handyman Services" heroImgRelPath="services/handyman.jpg"></Hero></div>
      <h1 className="text-center mb-4 mt-4">Handyman Services I Offer</h1>
      <Container className="container-main">
        <Row>
          {/*
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
          */}
          {/*xs={12} sm={12} md={6} lg={4} xl={7}*/}
          <Col className="pt-4" xs={12} sm={12} md={12} lg={12} xl={12}>
            <ListGroup as="ul" numbered variant="flush">
              <ListGroup.Item as="li">Door Hinges</ListGroup.Item>
              <ListGroup.Item as="li">Build Shelving</ListGroup.Item>
              <ListGroup.Item as="li">Build Storage</ListGroup.Item>
              <ListGroup.Item as="li">Molding Installation - Base or Crown</ListGroup.Item>
              <ListGroup.Item as="li">Painting</ListGroup.Item>
              <ListGroup.Item as="li">Install Drywall / Repair Drywall / Texture Drywall</ListGroup.Item>
              <ListGroup.Item as="li">Install Door Locks / Repair Door Locks</ListGroup.Item>
              <ListGroup.Item as="li">Hang Doors / Repair Doors / Replace Doors</ListGroup.Item>
              <ListGroup.Item as="li">Install Windows / Repair Windows / Replace Windows</ListGroup.Item>
              <ListGroup.Item as="li">Install Blinds / Install Curtains</ListGroup.Item>
              <ListGroup.Item as="li">Floor Installation or Repair</ListGroup.Item>
              <ListGroup.Item as="li">Hanging Doors</ListGroup.Item>
              <ListGroup.Item as="li">General Handyman Repairs</ListGroup.Item>
              <ListGroup.Item as="li">Fixing Leaks</ListGroup.Item>
              <ListGroup.Item as="li">Plumbing In Sinks</ListGroup.Item>
              <ListGroup.Item as="li">Installing Washing Machines</ListGroup.Item>
              <ListGroup.Item as="li">Repairing Flush Mechanisms on Toilets</ListGroup.Item>
              <ListGroup.Item as="li">Replacing / Adding New Sockets</ListGroup.Item>
              <ListGroup.Item as="li">Replacing Light Switches</ListGroup.Item>
              <ListGroup.Item as="li">Fitting Lights</ListGroup.Item>
              <ListGroup.Item as="li">Painting</ListGroup.Item>
              <ListGroup.Item as="li">Sealing</ListGroup.Item>
              <ListGroup.Item as="li">Grouting</ListGroup.Item>
              <ListGroup.Item as="li">Tiling</ListGroup.Item>
              <ListGroup.Item as="li">Putting Up Shelves</ListGroup.Item>
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

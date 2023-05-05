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
      <div><Hero heroText="Mr. Fix It LLC." secondaryText="Clean Up Services" heroImgRelPath="services/cleanup.jpg"></Hero></div>
      <h1 className="text-center mb-4 mt-4">Clean Up Services I Offer</h1>
      <Container>
        <Row>
          <Col className="pt-4" xs={12} sm={12} md={6} lg={8} xl={5}>
            <Carousel>
              <Carousel.Item>
                <StaticImage src="../images/services/cleanup.jpg" alt="handy man" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/services/cleanup.jpg" alt="handy man" className="d-block w-100" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <StaticImage src="../images/services/cleanup.jpg" alt="handy man" className="d-block w-100" />
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
              <ListGroup.Item as="li">Shrub and Bush Removal</ListGroup.Item>
              <ListGroup.Item as="li">Leaf Removal</ListGroup.Item>
              <ListGroup.Item as="li">Lawn Mowing</ListGroup.Item>
              <ListGroup.Item as="li">Construction Site Clean Outs</ListGroup.Item>
              <ListGroup.Item as="li">Construction Site Demolition Jobs</ListGroup.Item>
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

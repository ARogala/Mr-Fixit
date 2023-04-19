import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Seo } from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
        <h1>About Me</h1>
        <Row>
          <Col xs={12} md={6} lg={6}>add an image here</Col>
          <Col xs={12} md={6} lg={6}>
            <p>
              Hi, I'm T.J. Reid founder of Mr. FixIt LLC. I have been working in construction since 2000 
              and have over 20 years of experience! I strive to make my clients happy and would love to 
              help make you renovation or project a reality.
            </p>
            <p>Mr. FixIt is located in Salida Colorado</p>
            <p><Link to="/contact">Contact me</Link> to for a free estimate and let's talk about how I can help you.</p>
          </Col>
        </Row>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <Seo />
)

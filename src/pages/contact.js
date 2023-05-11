import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Seo } from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { aboutImg } from "./contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="mt-5"><StaticImage src="../images/services/handyman.jpg" alt="handy man" className={aboutImg} /></Col>
          <Col xs={12} md={6} lg={6} className="mt-5">
            <h1 className="text-center">Contact Information</h1>
            <h4 className="text-center">Call or Email For a Free Estimate</h4>
            <p>
              <a href="tel:+###########">&#9743; #-###-###-####</a><br/>
              <a href="mailto:youremail@mail.com">Email: youremail@mail.com</a><br/>
              Mr. Fix It is located in Salida Colorado and services the surrounding area.
            </p>
            <h1 className="text-center">Hours</h1>
            <p>Monday - Saturday 7am - 6pm</p>
            <p>Closed on Sunday</p>
            <h1 className="text-center">About Me</h1>
            <p>
              Hi, I'm T.J. Reid founder of Mr. Fix It LLC. I have been working in construction since 2000 
              and have over 20 years of experience! I strive to make my clients happy and would love to 
              help make your renovation or project a reality.
            </p>
            <p>If you have a project big or small please don't hesitate to contact me for a free estimate and let's talk about how I can help you.</p>
            <p>I usually return calls and answer emails the same day but fixing things keeps me really busy so it may take a day or two. Thank you for you patience!</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <Seo />
)

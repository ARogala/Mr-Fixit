import * as React from 'react'
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <p>Hi there! I'm TJ aka Mr. Fixit. I have been working in construction since I was 17 and have over 15 years of experience!!</p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <Seo />
)

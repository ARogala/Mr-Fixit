import * as React from 'react'
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <p>Hi there! I'm TJ aka Mr. Fixit. You can contact me for a free estimate anytime.</p>
    </Layout>
  )
}

export default ContactPage

export const Head = () => (
  <Seo />
)

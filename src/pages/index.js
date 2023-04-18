import * as React from "react"
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const IndexPage = () => {
  return (
    <main>
      <Layout/>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

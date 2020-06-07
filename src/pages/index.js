import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
     <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
  <Gallery/>
  </Layout>
)

export default IndexPage

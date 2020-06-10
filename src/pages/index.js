import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Carousel from "../components/carousel"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <Gallery />
  </Layout>
)

export default IndexPage

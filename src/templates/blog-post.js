import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

function blogPost({ pageContext }) {
  const { article } = pageContext
  return (
    <Layout>
      <div>
        <h1>{article.text}</h1>
        <h1>{article.url}</h1>
        <h1>{article.title}</h1>
      </div>
    </Layout>
  )
}

export default blogPost

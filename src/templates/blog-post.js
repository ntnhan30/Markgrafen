import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

function blogPost({ pageContext }) {
  const { article } = pageContext
  return (
    <Layout>
      <div>
        <h1>{article.title}</h1>
        <img
          src={`https://drive.google.com/uc?export=view&id=${article.url}`}
         alt=""
></img>


        <div dangerouslySetInnerHTML={{ __html: article.text }}></div>
        <h1>{article.url}</h1>
      </div>
    </Layout>
  )
}

export default blogPost

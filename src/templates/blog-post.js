import React from "react"
import { graphql,  } from "gatsby"
import Img from 'gatsby-image'
import Gallery from "../components/gallery"


//import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  // const { article } = pageContext
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{ data.post.title}</h1>
  <Img
              alt=""
              fluid={data.post.optimized_thumbnail.childImageSharp.fluid}
            />
        <div dangerouslySetInnerHTML={{ __html:  data.post.text }}></div>
      </div>
      <Gallery/>

    </Layout>
  )
}

export default BlogPost

export const BlogPostPageQuery = graphql`
query post ($postID : String!) {
  post(postID: {eq: $postID }) {
    url
    title
    text
    optimized_thumbnail {
      childImageSharp {
        fluid(maxHeight: 550) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`



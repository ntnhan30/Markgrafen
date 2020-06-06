import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allMyNodeType {
        edges {
          node {
            text
            postID
            title
          }
        }
      }
    }
  `)
  return (
      <div>
        <h1>Blog</h1>
        {data.allMyNodeType.edges.reverse().map(i => {
          return( 
            <Link to={`article/${i.node.postID}`}><h2>{i.node.title}</h2></Link>
              )
        })}
      </div>
  )
}

export default Gallery

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Img from 'gatsby-image'


const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allMyNodeType {
        edges {
          node {
            text
            postID
            title
            url
            optimized_thumbnail {
              childImageSharp {
                fluid(maxHeight: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
            <Link to={`article/${i.node.postID}`}><h2>{i.node.title}</h2>
            {/* <img
          src={`https://drive.google.com/uc?export=view&id=${i.node.url}`}
         alt=""
></img> */}
<Img
          alt=""
          fluid={i.node.optimized_thumbnail.childImageSharp.fluid}
        />
            </Link>
              )
        })}
      </div>
  )
}

export default Gallery

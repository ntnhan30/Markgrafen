import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.scss"


const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allPost {
        edges {
          node {
            text
            postID
            title
            url
            optimized_thumbnail {
              childImageSharp {
                fluid(maxHeight: 200) {
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
    <div className={galleryStyles.galleryWrap}>
      {/* <h1>Blog</h1> */}
      {data.allPost.edges.reverse().map(i => {
        return (
          <div className={galleryStyles.item}>
          <Link to={`post/${i.node.postID}`}>
            <h2>{i.node.title}</h2>
            {/* <img
          src={`https://drive.google.com/uc?export=view&id=${i.node.url}`}
         alt=""
></img> */}
            <Img
              alt=""
              fluid={i.node.optimized_thumbnail.childImageSharp.fluid}
            />
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery

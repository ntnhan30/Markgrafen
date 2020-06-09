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
                fluid(maxWidth: 600, maxHeight: 500) {
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
      {data.allPost.edges
        .slice()
        .reverse()
        .map(i => {
          return (
            <div className={galleryStyles.item}>
              <Link to={`post/${i.node.postID}`}>
                <div className={galleryStyles.imgDiv}>
                  <Img
                    alt=""
                    fluid={i.node.optimized_thumbnail.childImageSharp.fluid}
                    imgStyle={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
                <h2>{i.node.title}</h2>
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default Gallery

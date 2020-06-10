import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.scss"

const Carousel = () => {
  const data = useStaticQuery(graphql`
    {
      allPic {
        edges {
          node {
            url
            pic_thumbnail {
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
        {data.allPic.edges
        .slice()
        .reverse()
        .map(i => {
          return (
            <div className={galleryStyles.item}>
                <div className={galleryStyles.imgDiv}>
                  <Img
                    alt=""
                    fluid={i.node.pic_thumbnail.childImageSharp.fluid}
                    imgStyle={{
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default Carousel
